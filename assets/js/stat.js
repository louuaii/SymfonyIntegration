document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('generateReport').addEventListener('click', function (e) {
        e.preventDefault();

        const userRole = document.getElementById('dashboard').getAttribute('data-role');

        let data = [];
        let fileName = 'report.xlsx';

        if (userRole === 'ROLE_ADMIN') {
            data = [
                ['Category', 'Count'],
                ['Students', parseInt(document.getElementById('studentsCount').textContent)],
                ['Teachers', parseInt(document.getElementById('teachersCount').textContent)],
                ['Events', 8] 
            ];
            fileName = 'admin_report.xlsx';
        } else if (userRole === 'ROLE_TEACHER') {
            data = [
                ['Category', 'Count'],
                ['Students', parseInt(document.getElementById('studentsCount').textContent)],
                ['Courses', 5] 
            ];
            fileName = 'teacher_report.xlsx';
        } else if (userRole === 'ROLE_STUDENT') {
            data = [
                ['Category', 'Count'],
                ['Courses', 8], 
                ['Projects', 3] 
            ];
            fileName = 'student_report.xlsx';
        }

        const ws = XLSX.utils.aoa_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Report');

        XLSX.writeFile(wb, fileName);
    });
});
