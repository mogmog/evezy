#### Evezy tech test

- `npm install`
- `npm start`

Component is located at `src/components/DateGrid`

Notes : 

- I typically wouldn't do it like this, I prefer to do more processing on a backend somewhere, in this case maybe doing a left join with a sequence table using `generate_series` to list all the days in 2019, with the count of the payments. 

- If I was doing this for real I would probably not put both failure and success grids over the top of each other. This leads to either hidden data, or murky mixes of green and red that doesnt offer any value. 

- I hard coded several fields that should be calculated - the number of padded days, and the denominator for the opacity calculation.

- I didnt have time to do any tests.





