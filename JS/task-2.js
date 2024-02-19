let student = {
  subjects: [],

  addSubject(subject) {
    if (this.subjects.includes(subject)) {
      console.log(`Ви вже вивчаєте предмет ${subject}`);
    } else {
      this.subjects.push(subject);
      console.log(`Предмет ${subject} додано`);
    }
  },
  removeSubject(subject) {
    for (let i = 0; i < this.subjects.length; i++) {
      if (subject === this.subjects[i]) {
        this.subjects.splice(i, 1);
        console.log(`Предмет ${subject} видалено`);
      } else {
        console.log(`Ви не вивчаєте предмет ${subject}`);
      }
    }
  },
};

student.addSubject("Математика"); // Предмет Математика додано.
student.addSubject("Історія"); // Предмет Історія додано.
student.addSubject("Математика"); // Ви вже вивчаєте предмет Математика.
console.log(student.subjects); // ["Математика", "Історія"]
student.removeSubject("Історія"); // Предмет Історія видалено.
console.log(student.subjects); // ["Математика"]
student.removeSubject("Англійська"); // Ви не вивчаєте предмет Англійська.
