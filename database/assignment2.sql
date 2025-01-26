-- Populate the account table with data
insert into account (account_firstname, account_lastname, account_email, account_password)
values ('Tony', 'Stark', 'tony@starkent', 'Iam1ronM@n');

-- Update account type to Admin
update account
set account_type = 'Admin'
where account_firstname = 'Tony' and account_lastname = 'Stark';

-- Delete TOny Stark from account table
delete from account
where account_firstname = 'Tony' and account_lastname = 'Stark';

-- Update GM Hummer inventory record description

update inventory
set inv_description (inv_description, 'the small interiors', 'a huge interior')
where inv_make = 'GM' and inv_model = 'Hummer';

-- Inner join to fetch inventory from the Sport category
select inv_make, inv_model, classification.classification_name
from inventory
inner join classification on inventory.classification_id = classification.classification_id
where classification.classification_name = 'Sport';

-- Update file paths in inv_image and inv_thumbnail
update inventory
set inv_image = replace(inv_image, '/images/', '/images/vehicles/'),
	inv_thumbnail = replace(inv_thumbnail, '/images/', '/images/vehicles/');
