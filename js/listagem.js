const SUPABASE_URL = 'https://skpwgisyruejiqnnixfh.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrcHdnaXN5cnVlamlxbm5peGZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIyMTczMDcsImV4cCI6MjAzNzc5MzMwN30.kn0RhONn-huvBmfvFwyO5tehrYjG-xbk3Z4GN_2rX60'

const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

document.querySelector('.ver-mais').addEventListener('click', async (e) => { 
    alert('Serviço ainda não implementado! :(')
})

document.querySelector("#sair").addEventListener('click', async (e) => {

    const { error } = await _supabase.auth.signOut()

    window.location.href = 'login.html';

})