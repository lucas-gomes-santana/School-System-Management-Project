package api.Back_End.dto;

import java.util.List;

public class TeacherResponseDTO {
    private String teacherName;
    private String cityName;
    private String schoolName;
    private List<ClassInfo> classes;

    public TeacherResponseDTO(String teacherName, String cityName, String schoolName, List<ClassInfo> classes) {
        this.teacherName = teacherName;
        this.cityName = cityName;
        this.schoolName = schoolName;
        this.classes = classes;
    }

    public String getTeacherName() { return teacherName; }

    public void setTeacherName(String teacherName) { this.teacherName = teacherName; }

    public String getCityName() { return cityName; }

    public void setCityName(String cityName) { this.cityName = cityName; }

    public String getSchoolName() { return schoolName; }

    public void setSchoolName(String schoolName) { this.schoolName = schoolName; }

    public List<ClassInfo> getClasses() { return classes; }

    public void setClasses(List<ClassInfo> classes) { this.classes = classes; }

    // Intern class that represents the classes and your students
    public static class ClassInfo {
        private String className;
        private List<String> students;

        public ClassInfo(String className, List<String> students) {
            this.className = className;
            this.students = students;
        }

        public String getClassName() { return className; }

        public void setClassName(String className) { this.className = className; }

        public List<String> getStudents() { return students; }

        public void setStudents(List<String> students) { this.students = students; }
    }
}