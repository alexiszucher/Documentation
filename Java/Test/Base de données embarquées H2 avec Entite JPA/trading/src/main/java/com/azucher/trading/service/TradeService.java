package com.azucher.trading.service;

import com.azucher.trading.entity.Trade;
import com.azucher.trading.repository.TradeRepository;
import com.azucher.trading.util.DateUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TradeService {

    @Autowired
    TradeRepository tradeRepository;

    public List<Trade> getEveryTrade() {
        return tradeRepository.findAll();
    }

    public double sum(List<Trade> tradeList) {
        int total = 0;
        for(Trade trade: tradeList) {
            total += trade.getPerformance();
        }
        return total;
    }

    public double avg(List<Trade> tradeList) {
        if(tradeList.size() > 0) {
            int total = 0;
            int numberValue = 0;
            for (Trade trade : tradeList) {
                total += trade.getPerformance();
                numberValue++;
            }
            return total / numberValue;
        }
        return 0;
    }

    public double getSumOfEveryTrade() {
        List<Trade> tradeList = this.getEveryTrade();
        return sum(tradeList);
    }

    public List<Trade> getTradeLast30Days() {
        return tradeRepository.getTradeSinceDate(DateUtil.getDateInPast(30));
    }

    public List<Trade> getTradeBetween60And30Days() {
        return tradeRepository.getTradeBetweenDate(DateUtil.getDateInPast(60), DateUtil.getDateInPast(30));
    }

    public double getEvolutionPercentage(double nb1, double nb2) {
        return Math.floor( ((nb2-nb1)/nb1*100) * 100 ) / 100;
    }
}
