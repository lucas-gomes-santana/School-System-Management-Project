// Front-End Interface

export interface TeacherResponseDTO {
  teacherName: string; // Name of teacher
  cityName: string;    // Name of city
  schoolName: string;  // Name of school
  classes: ClassInfo[]; // Classes list
}

export interface ClassInfo {
  className: string;   // Class name
  students: string[];  // Studenst list
}
