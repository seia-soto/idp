create table "user" (
  id serial primary key,
  name text not null,
  email text not null,
  password text not null,
  mfa text not null,
  is_disabled boolean not null,
  is_email_verified boolean not null,
  is_mfa_enabled boolean not null,
  created_at timestamp without time zone not null,
  updated_at timestamp without time zone not null
);

create table "org" (
  id serial primary key,
  name text not null,
  description text not null,
  owner_id serial references "user"(id),
  is_disabled boolean not null,
  is_mfa_forced boolean not null,
  created_at timestamp without time zone not null,
  updated_at timestamp without time zone not null
);

create table "member" (
  id serial primary key,
  name text not null,
  org_id serial references "org"(id),
  user_id serial references "user"(id),
  is_disabled boolean not null,
  is_privileged boolean not null,
  created_at timestamp without time zone not null,
  updated_at timestamp without time zone not null
);

create table "site" (
  id serial primary key,
  name text not null,
  description text not null,
  owner_id serial references "member"(id),
  is_disabled boolean not null,
  is_default boolean not null,
  is_anyone_joinable boolean not null,
  created_at timestamp without time zone not null,
  updated_at timestamp without time zone not null
);

create table "site_access" (
  id serial primary key,
  org_id serial references "org"(id),
  member_id serial references "member"(id),
  site_id serial references "site"(id),
  created_at timestamp without time zone not null
);
