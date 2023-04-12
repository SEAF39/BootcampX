SELECT COUNT(students.*) AS student_count, cohorts.name AS cohort_name
FROM cohorts
JOIN students ON students.cohort_id = cohorts.id
GROUP BY cohorts.name
HAVING COUNT(students.*) >= 18
ORDER BY student_count;