// enum

enum UserRoles {
  admin = "amdin",
  instructor = "instructor",
  student = "student",
}

const canEdit = (role: UserRoles) => {
  if (role === UserRoles.admin || role === UserRoles.instructor) {
    return true;
  } else return false;
};

const result = canEdit(UserRoles.admin);
console.log(result);
