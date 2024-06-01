DROP TABLE IF EXISTS videos CASCADE;

CREATE TABLE videos (
    id SERIAL PRIMARY KEY,
    title VARCHAR,
    src VARCHAR,
    rating INTEGER DEFAULT 0,
    addedDate  date   
);

-- INSERT INTO
--     videos (title, src)
-- VALUES
--     (
--         'Never Gonna Give You Up',
--         'https://www.youtube.com/embed/dQw4w9WgXcQ?si=sdvqEritjOTwN2Af'
--     );

-- INSERT INTO
--     videos (title, src)
-- VALUES
--     (
--         'The Coding Train',
--         'https://www.youtube.com/embed/HerCR8bw_GE?si=5Xfqx9K1JMB_QCBh'
--     );

-- INSERT INTO
--     videos (title, src)
-- VALUES
--     (
--         'Mac & Cheese | Basics with Babish',
--         'https://www.youtube.com/embed/FUeyrEN14Rk?si=dUHtCerjTKIdgK5u'
--     );

-- INSERT INTO
--     videos (title, src)
-- VALUES
--     (
--         'Videos for Cats to Watch - 8 Hour Bird Bonanza',
--         'https://www.youtube.com/embed/xbs7FT7dXYc?si=W9bjQcH1cYbIlnY3'
--     );

-- INSERT INTO
--     videos (title, src)
-- VALUES
--     (
--         'The Complete London 2012 Opening Ceremony | London 2012 Olympic Games',
--         'https://www.youtube.com/embed/4As0e4de-rI?si=QvvaM7T6gj31cQ6z'
--     );

-- INSERT INTO
--     videos (title, src)
-- VALUES
--     (
--         'Learn Unity - Beginners Game Development Course',
--         'https://www.youtube.com/embed/gB1F9G0JXOo?si=zh21-opwR7otFnSZ'
--     );

-- INSERT INTO
--     videos (title, src)
-- VALUES
--     (
--         'Cracking Enigma in 2021 - Computerphile',
--         'https://www.youtube.com/embed/RzWB5jL5RX0?si=OuYo20zJalIFBT2w'
--     );

-- INSERT INTO
--     videos (title, src)
-- VALUES
--     (
--         'Coding Adventure: Chess AI',
--         'https://www.youtube.com/embed/U4ogK0MIzqk?si=xICbZlD8Hm9nCyWy'
--     );

-- INSERT INTO
--     videos (title, src)
-- VALUES
--     (
--         'Coding Adventure: Ant and Slime Simulations',
--         'https://www.youtube.com/embed/X-iSQQgOd1A?si=bZUPXmKxC43YzERA'
--     );

-- INSERT INTO
--     videos (title, src)
-- VALUES
--     (
--         'Why the Tour de France is so brutal',
--         'https://www.youtube.com/embed/ZacOS8NBK6U?si=nfaj6AHw0aaE-c7C'
--     );