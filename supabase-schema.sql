-- Run this in your Supabase SQL editor
create table if not exists study_sessions (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  date date not null,
  deck text not null,
  cards_done integer default 0,
  created_at timestamptz default now(),
  unique(user_id, date, deck)
);

alter table study_sessions enable row level security;

create policy "Users see own sessions" on study_sessions
  for all using (auth.uid() = user_id);
