const SUPABASE_URL = 'https://skpwgisyruejiqnnixfh.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrcHdnaXN5cnVlamlxbm5peGZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIyMTczMDcsImV4cCI6MjAzNzc5MzMwN30.kn0RhONn-huvBmfvFwyO5tehrYjG-xbk3Z4GN_2rX60'

const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

document.getElementById('login-form').addEventListener('click', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const { user, session, error } = await _supabase.auth.signInWithPassword({
        email,
        password,
    });

    if(error) {
        alert("Verifique as suas informações de login (e-mail e senha)!");
    } else {
        window.location.href =  window.location.origin + '/listagem-vagas.html';
    }
});