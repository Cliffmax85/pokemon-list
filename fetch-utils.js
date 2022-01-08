const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTUwODU3MCwiZXhwIjoxOTU1MDg0NTcwfQ.b9_dCGIQkWfhzS3QZihLzQkD3n-sAt3L9swaEU7JzqI';
const SUPABASE_URL = 'https://rfwnchvtfqbachqhdfbi.supabase.co';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getAllPokemon() {
    const response = await client
        .from('pokemon')
        .select();
    return checkError(response);
}

export async function getPokemon(id) {
    const response = await client
        .from('pokemon')
        .select()
        .match({ id: id })
        .single();
    return checkError(response);
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}