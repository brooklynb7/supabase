-- Enable pgcrypto extension for password hashing (if not already enabled)
create extension if not exists pgcrypto;

-- Insert test users into auth.users
-- Password for all test users: "password123"
-- Note: The trigger on_auth_user_created will automatically create profiles for these users
-- Note: In production, use stronger passwords and different credentials

-- Test User 1: admin@example.com
-- The profile will be automatically created by the trigger using raw_user_meta_data
insert into auth.users (
  instance_id,
  id,
  aud,
  role,
  email,
  encrypted_password,
  email_confirmed_at,
  recovery_sent_at,
  last_sign_in_at,
  raw_app_meta_data,
  raw_user_meta_data,
  created_at,
  updated_at,
  confirmation_token,
  email_change,
  email_change_token_new,
  recovery_token
) values (
  '00000000-0000-0000-0000-000000000000',
  gen_random_uuid(),
  'authenticated',
  'authenticated',
  'admin@example.com',
  crypt('password123', gen_salt('bf')),
  now(),
  now(),
  now(),
  '{"provider":"email","providers":["email"]}',
  '{"name":"Admin User","phone":null}',
  now(),
  now(),
  '',
  '',
  '',
  ''
);

-- Test User 2: user@example.com
insert into auth.users (
  instance_id,
  id,
  aud,
  role,
  email,
  encrypted_password,
  email_confirmed_at,
  recovery_sent_at,
  last_sign_in_at,
  raw_app_meta_data,
  raw_user_meta_data,
  created_at,
  updated_at,
  confirmation_token,
  email_change,
  email_change_token_new,
  recovery_token
) values (
  '00000000-0000-0000-0000-000000000000',
  gen_random_uuid(),
  'authenticated',
  'authenticated',
  'user@example.com',
  crypt('password123', gen_salt('bf')),
  now(),
  now(),
  now(),
  '{"provider":"email","providers":["email"]}',
  '{"name":"Test User","phone":null}',
  now(),
  now(),
  '',
  '',
  '',
  ''
);

-- Insert employees data
insert into public.employees
  (name)
values
  ('Erlich Bachman'),
  ('Richard Hendricks'),
  ('Monica Hall');