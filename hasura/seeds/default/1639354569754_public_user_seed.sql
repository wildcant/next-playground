SET check_function_bodies = false;
INSERT INTO public."user" (id, "createdAt", "updatedAt", "lastSeen", name, email) VALUES (1, '2021-12-12 22:19:26.581239+00', '2021-12-12 23:49:13.918802+00', '2021-12-12 23:49:13.918802+00', 'Joe', 'joe@mail.com');
SELECT pg_catalog.setval('public.user_id_seq', 1, true);
