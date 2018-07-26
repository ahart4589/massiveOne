INSERT INTO vacation_packages(location, price, description, image_url)
VALUES ($1, $2, $3, $4)

SELECT * FROM vacation_packages
-- placeholders for what will be passed in in create method in Ctrl.js