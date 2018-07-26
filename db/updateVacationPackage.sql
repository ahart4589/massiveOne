UPDATE vacation_packages 
SET location = $1, price = $2, description = $3
WHERE id = $4;

SELECT * FROM vacation_packages