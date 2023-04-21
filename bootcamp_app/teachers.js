const { Pool } = require('pg');
const pool = new Pool({
  user: 'labber',
  password: '123',
  host: 'localhost',
  database: 'bootcampx',
  port: 5432,
});


const cohortName = process.argv[2];

/* pool.query(`
  SELECT DISTINCT teachers.name
  FROM teachers
  JOIN assistance_requests ON teachers.id = assistance_requests.teacher_id
  JOIN students ON assistance_requests.student_id = students.id
  JOIN cohorts ON students.cohort_id = cohorts.id
  WHERE cohorts.name = $1
  ORDER BY teachers.name;
`, [cohortName])
  .then(res => {
    console.log(`Teachers that made an assistance request during ${cohortName}:`);
    res.rows.forEach(teacher => {
      console.log(teacher.name);
    })
  })
  .catch(err => console.error('query error', err.stack));

 */

  pool.query(`
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name = '${process.argv[2] || 'JUL02'}'
ORDER BY teacher;
`)
.then(res => {
  res.rows.forEach(row => {
    console.log(`${row.cohort}: ${row.teacher}`);
  })
});