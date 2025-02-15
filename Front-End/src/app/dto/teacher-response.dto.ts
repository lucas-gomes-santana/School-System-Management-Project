// Front-End Interface

export interface TeacherResponseDTO {
  teacherName: string; // Nome do professor
  cityName: string;    // Nome da cidade
  schoolName: string;  // Nome da escola
  classes: ClassInfo[]; // Lista de turmas
}

export interface ClassInfo {
  className: string;   // Nome da turma
  students: string[];  // Lista de alunos
}
