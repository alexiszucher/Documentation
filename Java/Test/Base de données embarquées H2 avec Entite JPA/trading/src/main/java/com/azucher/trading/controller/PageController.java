package com.azucher.trading.controller;

import com.azucher.trading.service.TradeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PageController {

    @Autowired
    TradeService tradeService;

    @GetMapping(path="/home")
    public String getHome(Model model) {
        // Initialize data
        double account = tradeService.getSumOfEveryTrade();
        double avgPerDay = tradeService.avg(tradeService.getTradeLast30Days());
        double evolutionAveragePerformancePerDayBetweenLastAndThisMonth = tradeService.getEvolutionPercentage(tradeService.avg(tradeService.getTradeBetween60And30Days()), tradeService.avg(tradeService.getTradeLast30Days()));
        double sumLast30Days = tradeService.sum(tradeService.getTradeLast30Days());
        double evolutionPerformanceBetweenEveryTradeAndThisMonth = tradeService.getEvolutionPercentage(tradeService.sum(tradeService.getEveryTrade()) - tradeService.sum(tradeService.getTradeLast30Days()), tradeService.sum(tradeService.getEveryTrade()));
        double estimateProfit30DaysLater = avgPerDay * 30;
        double estimateProfit365DaysLater = avgPerDay * 365;

        // Add to UI model
        model.addAttribute("account", account);
        model.addAttribute("avgPerDay", avgPerDay);
        model.addAttribute("sumLast30Days", sumLast30Days);
        model.addAttribute("evolutionAveragePerformancePerDayBetweenLastAndThisMonth", evolutionAveragePerformancePerDayBetweenLastAndThisMonth);
        model.addAttribute("evolutionPerformanceBetweenEveryTradeAndThisMonth", evolutionPerformanceBetweenEveryTradeAndThisMonth);
        model.addAttribute("estimateProfit30DaysLater", estimateProfit30DaysLater);
        model.addAttribute("estimateProfit365DaysLater", estimateProfit365DaysLater);

        // Show home.html
        return "home.html";
    }

}
