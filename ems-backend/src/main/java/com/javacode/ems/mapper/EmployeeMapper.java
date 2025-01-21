package com.javacode.ems.mapper;

import org.springframework.beans.factory.annotation.Autowired;

import com.javacode.ems.dto.EmployeeDto;
import com.javacode.ems.entity.Employee;

public class EmployeeMapper {
	@Autowired
	Employee employee;
	public static EmployeeDto mapToEmployeeDto(Employee employee) {
		return new EmployeeDto(
							employee.getId(),
							employee.getFirstName(),
							employee.getLastName(),
							employee.getEmail()
		);
	}
	
	public static Employee mapToEmloyee(EmployeeDto employeeDto) {
		return new Employee(
					employeeDto.getId(),
					employeeDto.getFirstName(),
					employeeDto.getLastName(),
					employeeDto.getEmail()
				);
	}
}
