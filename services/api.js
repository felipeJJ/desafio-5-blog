import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://jrnrftskqmlctsjcnejc.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpybnJmdHNrcW1sY3RzamNuZWpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYwNzQyMzcsImV4cCI6MjAwMTY1MDIzN30.nSyxJiVkTpvxda_RuLgKvR2aV4wQA1_gR_YkuRJhnpo",
        authorization: " Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpybnJmdHNrcW1sY3RzamNuZWpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYwNzQyMzcsImV4cCI6MjAwMTY1MDIzN30.nSyxJiVkTpvxda_RuLgKvR2aV4wQA1_gR_YkuRJhnpo"
    }
})