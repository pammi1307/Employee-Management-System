package com.javacode.ems.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.javacode.ems.dto.EmployeeDto;
import com.javacode.ems.entity.Employee;
import com.javacode.ems.exception.ResouceNotFoundException;
import com.javacode.ems.mapper.EmployeeMapper;
import com.javacode.ems.repository.EmployeeRepository;
import com.javacode.ems.service.EmployeeService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {
	
	private EmployeeRepository employeeRepository;
	
	@Override
	public EmployeeDto createEmployee(EmployeeDto employeeDto) {
		
		Employee employee = EmployeeMapper.mapToEmloyee(employeeDto);
		Employee savedEmployee = employeeRepository.save(employee);
		
		
		return EmployeeMapper.mapToEmployeeDto(savedEmployee);
	}

	@Override
	public EmployeeDto getEmployeeById(Long employeeId) {
		
		Employee employee = employeeRepository.findById(employeeId)
						.orElseThrow(() -> 
						new ResouceNotFoundException("Employee is not exists with given id :"+employeeId));
		return EmployeeMapper.mapToEmployeeDto(employee);
	}

	@Override
	public List<EmployeeDto> getAllEmployees() {
		
		List<Employee> employees = employeeRepository.findAll();
		
		return employees.stream().map((employee) -> EmployeeMapper.mapToEmployeeDto(employee))
				.collect(Collectors.toList());
	}

	@Override
	public EmployeeDto updateEmployee(Long employeeId, EmployeeDto updatedEmployee) {
		
		Employee employee = employeeRepository.findById(employeeId).orElseThrow(
				() -> new ResouceNotFoundException("Employee is not exists with given id :"+employeeId) 
		);
		
		employee.setFirstName(updatedEmployee.getFirstName());
		employee.setLastName(updatedEmployee.getLastName());
		employee.setEmail(updatedEmployee.getEmail());
		
		Employee updatedEmployeeObj = employeeRepository.save(employee);
		
		return EmployeeMapper.mapToEmployeeDto(updatedEmployeeObj);
	}

	@Override
	public void deleteEmployee(Long employeeId) {
		
		Employee employee = employeeRepository.findById(employeeId).orElseThrow(
				() -> new ResouceNotFoundException("Employee is not exists with given id :"+employeeId) 
		);
		
		employeeRepository.deleteById(employeeId);
		
	}

}
