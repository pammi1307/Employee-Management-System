package com.javacode.ems.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.javacode.ems.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long>{
	
}
