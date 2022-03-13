package com.azucher.trading.repository;

import com.azucher.trading.entity.Trade;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Calendar;
import java.util.Date;
import java.util.List;

public interface TradeRepository extends JpaRepository<Trade, Long> {

    @Query("SELECT t FROM Trade t WHERE t.date > :date")
    public List<Trade> getTradeSinceDate(@Param("date") Date date);

    @Query("SELECT t FROM Trade t WHERE t.date BETWEEN :startDate AND :endDate")
    public List<Trade> getTradeBetweenDate(@Param("startDate") Date startDate, @Param("endDate") Date endDate);

}
