package com.DavDash.DevDash.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.DavDash.DevDash.dto.SaleSuccessDTO;
import com.DavDash.DevDash.dto.SaleSumDTO;
import com.DavDash.DevDash.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long>{

	@Query("SELECT new com.DavDash.DevDash.dto.SaleSumDTO(obj.seller, SUM(obj.amount)) "
			+ "FROM Sale AS obj GROUP BY obj.seller")
	List<SaleSumDTO> amountGroupedBySeller();
	
	@Query("SELECT new com.DavDash.DevDash.dto.SaleSuccessDTO(obj.seller, SUM(obj.visited),  SUM(obj.deals)) "
			+ "FROM Sale AS obj GROUP BY obj.seller")
	List<SaleSuccessDTO> sucessGroupedBySeller();
	
	
	
}
