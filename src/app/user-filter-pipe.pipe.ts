import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userFilterPipe'
})
export class UserFilterPipePipe implements PipeTransform {

  transform(value: any[], filterData: any): any[] {
    const searchTerm = filterData.toUpperCase();
    console.log(value);
    console.log(searchTerm);
    return value.filter((user: any) =>
        user.name.includes(searchTerm) ||
        user.class.toString().includes(searchTerm) ||
        user.section.includes(searchTerm) ||
        user.progress.toString().includes(searchTerm) ||
        user.marks.toString().includes(searchTerm) ||
        user.school.includes(searchTerm)
    );
  }
}

