package com.DavDash.DevDash.services;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.DavDash.DevDash.dto.SaleDTO;
import com.DavDash.DevDash.dto.SaleSuccessDTO;
import com.DavDash.DevDash.dto.SaleSumDTO;
import com.DavDash.DevDash.entities.Sale;
import com.DavDash.DevDash.repositories.SaleRepository;
import com.DavDash.DevDash.repositories.SellerRepository;

@Service
public class SaleService {
	
	@Autowired
	private SaleRepository repository;
	
	@Autowired
	private SellerRepository sellerRepository;

	public List<SaleDTO> amountGroupedBySeller;
	
	@Transactional(readOnly = true)
	public Page<SaleDTO> findAll(Pageable pageable) {
		sellerRepository.findAll();
		Page <Sale> result = repository.findAll(pageable);
		return result.map(x -> new SaleDTO(x));
	}
	
	@Transactional(readOnly = true)
	public List<SaleSumDTO> amountGroupedBySeller() {
		return repository.amountGroupedBySeller();
		
	}	
	
	@Transactional(readOnly = true)
	public List<SaleSuccessDTO> successGroupedBySeller() {
		return repository.sucessGroupedBySeller();
		
	}
}


