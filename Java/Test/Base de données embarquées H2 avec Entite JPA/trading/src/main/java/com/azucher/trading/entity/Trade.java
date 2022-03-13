package com.azucher.trading.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;
import java.util.Objects;

@Entity
public class Trade {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private double performance;
    private Date date;

    public Trade() {}

    public Trade(int id, double performance, Date date) {
        this.id = id;
        this.performance = performance;
        this.date = date;
    }

    public int getId() {
        return id;
    } public void setId(int id) {
    }

    public double getPerformance() {
        return performance;
    } public void setPerformance(double performance) {
        this.performance = performance;
    }

    public Date getDate() {
        return date;
    } public void setDate(Date date) {
        this.date = date;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Trade trade = (Trade) o;
        return id == trade.id && Double.compare(trade.performance, performance) == 0 && Objects.equals(date, trade.date);
    }
}
