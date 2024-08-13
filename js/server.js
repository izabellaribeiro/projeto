const SUPABASE_URL = 'https://skpwgisyruejiqnnixfh.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrcHdnaXN5cnVlamlxbm5peGZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIyMTczMDcsImV4cCI6MjAzNzc5MzMwN30.kn0RhONn-huvBmfvFwyO5tehrYjG-xbk3Z4GN_2rX60'
const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

document.getElementById('registration-form').addEventListener('click', async (e) => {
    e.preventDefault();

    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const birthdate = document.getElementById('birthdate').value;

    const { user, session, error } = await _supabase.auth.signUp({
        email,
        password,
    });

    console.log(error);

    if(!error) {
        const { data } = await _supabase.from('users-info').insert([
            {email}
        ]);

        console.log(data);
    }

    if (error) {
        console.error('Erro ao registrar usuário:', error.message);
    } else {
        localStorage.setItem('user_email', email);
        window.location.href = 'montagem-perfil.html';
    }
});

