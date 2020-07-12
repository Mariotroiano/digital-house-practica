select last_name, first_name from actors;
-- resultado : gunn

select title, awards from movies;
-- resultado : parque

select title, length from movies
where title = "titanic";
-- resultado : 320

select title, id from series where title = "Person of interest";
-- resultado : 4
select season_id, number from episodes where number = 2;
	-- resultado : 46
    
 select title, extract(year from release_date) as year_release_date from movies;
 
 

  

select title from movies where title like "%a";
-- resultado : hotel

select count(first_name) from actors where first_name like "Jim";
-- resultado : hay 3 jim

select sum(awards), title from movies where title like "La guerra de las galaxias%";
-- resultado : 13

select *  from actors
inner join movies on movies.id = favorite_movie_id
where first_name = "leonardo";
-- resultado : de

select *  from actors
inner join movies on movies.id = favorite_movie_id 
where actors.rating = 2.3;
-- resultado : titanic

select  genre_id, title, genres.name from series inner join genres on genres.id = series.genre_id;
-- resultado : fantasia

select title, genres.name from movies inner join genres on movies.genre_id = genres.id && genres.name = "animacion"; 
-- resultado : intensamente

select actors.last_name from actors
 inner join actor_movie on actors.id = actor_movie.movie_id 
 inner join movies on movies.title = 'parque jurasico';
 
 select movies.title, genres.name from movies
 inner join genres on genres.id = movies.genre_id 
 where movies.rating between 1 and 4;
 -- resultado "mi"
 
 select name, avg(movies.length) as length_movies
 from movies
 inner join genres on genres.id = movies.genre_id
 group by name
 order by length_movies asc;
 -- resultado : infantiles
 
select actors.first_name, count(movies.title) as count_movies from actor_movie 
inner join movies on movies.id = actor_movie.movie_id 
inner join actors on actors.id = actor_movie.actor_id
group by actors.first_name
order by count_movies desc;
-- resultado : Emma

 
 select genres.name, count(movies.title) as movies_for_genres from movies 
 inner join genres on genres.id = movies.genre_id
 group by genres.name
 order by movies_for_genres desc ;
 -- resultado : 5
 
 
  select genres.name, count(movies.id) as movies_for_genres from movies 
 inner join genres on genres.id = movies.genre_id 
 group by genres.name 
 order by movies_for_genres desc
 
 

 
 
 