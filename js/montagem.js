const SUPABASE_URL = 'https://skpwgisyruejiqnnixfh.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrcHdnaXN5cnVlamlxbm5peGZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIyMTczMDcsImV4cCI6MjAzNzc5MzMwN30.kn0RhONn-huvBmfvFwyO5tehrYjG-xbk3Z4GN_2rX60'
const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

document.getElementById('profile-setup-form').addEventListener('click', async (e) => {
    e.preventDefault();

    const fullname = document.getElementById('fullname').value;
    const cpf = document.getElementById('cpf').value;
    const location = document.getElementById('address').value;
    const phone_number = document.getElementById('phone').value;
    const email = localStorage.getItem('user_email'); 

    console.log(fullname, cpf, location, phone_number, email);
    const { data, error } = await _supabase.from('users-info').update([
        { fullname, cpf, location, phone_number }
    ]).eq('email', email);

    if (error) {
        console.error('Erro ao atualizar informações do usuário:', error.message);
    } else {

        alert('Perfil salvo com sucesso!');
        window.location.href = 'index.html';
        localStorage.removeItem('user_email');
    }
});