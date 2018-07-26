create table vacation_packages(
    id serial primary key,
    location text,
    price decimal,
    description text,
    image_url text
);

insert into vacation_packages(location,price, description,image_url)
values('Japan',4035.67,'very cool trip to Japan. just do it!', https://backroads-web.s3.amazonaws.com/images/search/thumbnail/japan-ocean-cruise-walking-hiking-tours.jpg)

