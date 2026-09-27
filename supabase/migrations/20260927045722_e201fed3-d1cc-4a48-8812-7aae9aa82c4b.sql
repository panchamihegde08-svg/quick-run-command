
DELETE FROM public.shop_records WHERE entity = 'categories';
DELETE FROM public.user_roles WHERE user_id IN (SELECT id FROM public.profiles WHERE email = 'owner.test1@gmail.com');
DELETE FROM public.profiles WHERE email = 'owner.test1@gmail.com';
