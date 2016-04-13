/*
    *
    * Wijmo Library 5.20161.142
    * http://wijmo.com/
    *
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    *
    * Licensed under the Wijmo Commercial License.
    * sales@wijmo.com
    * http://wijmo.com/products/wijmo-5/license/
    *
    */
/**
 * Defines classes that add analytics features to charts including @see:TrendLine,
 * @see:MovingAverage and @see:FunctionSeries.
 */
declare module wijmo.chart.analytics {
    /**
     * Represents base class for various trend lines.
     */
    class TrendLineBase extends SeriesBase {
        private _sampleCount;
        private _bind;
        private _bindX;
        _xValues: any[];
        _yValues: any[];
        _originXValues: any[];
        _originYValues: any[];
        /**
         * Initializes a new instance of the @see:TrendLineBase class.
         *
         * @param options A JavaScript object containing initialization data for the TrendLineBase Series.
         */
        constructor(options?: any);
        /**
         * Gets or sets the sample count for function calculation.
         * The property doesn't apply for MovingAverage.
         */
        sampleCount: number;
        /**
         * Gets the approximate y value from the given x value.
         *
         * @param x The x value to be used for calculating the Y value.
         */
        approximate(x: number): number;
        getValues(dim: number): number[];
        _calculateValues(): void;
        _initProperties(o: any): void;
        _invalidate(): void;
        _clearValues(): void;
        _clearCalculatedValues(): void;
    }
}

declare module wijmo.chart.analytics {
    /**
     * Specifies the fit type of the trendline series.
     */
    enum TrendLineFitType {
        /**
         * A straight line that most closely approximates the data.  Y(x) = a * x + b.
         */
        Linear = 0,
        /**
         * Regression fit to the equation Y(x) = a * exp(b*x).
         */
        Exponential = 1,
        /**
         * Regression fit to the equation Y(x) = a * ln(x) + b.
         */
        Logarithmic = 2,
        /**
         * Regression fit to the equation Y(x) = a * pow(x, b).
         */
        Power = 3,
        /**
         * Regression fit to the equation Y(x) = a + b * cos(x) + c * sin(x) + d * cos(2*x) + e * sin(2*x) + ...
         */
        Fourier = 4,
        /**
         * Regression fit to the equation Y(x) = a * x^n + b * x^n-1 + c * x^n-2 + ... + z.
         */
        Polynomial = 5,
        /**
         * The minimum X-value.
         */
        MinX = 6,
        /**
         * The minimum Y-value.
         */
        MinY = 7,
        /**
         * The maximum X-value.
         */
        MaxX = 8,
        /**
         * The maximum Y-value.
         */
        MaxY = 9,
        /**
         * The average X-value.
         */
        AverageX = 10,
        /**
         * The average Y-value.
         */
        AverageY = 11,
    }
    /**
     * Represents a trend line for @see:FlexChart and @see:FinancialChart.
     *
     * A trendline is a line superimposed on a chart revealing the overall direction
     * of data.
     * You may define a different fit type for each @see:TrendLine object that you
     * add to the @see:FlexChart series collection by setting the fitType property.
     */
    class TrendLine extends TrendLineBase {
        private _fitType;
        private _order;
        private _helper;
        /**
         * Initializes a new instance of the @see:TrendLine class.
         *
         * @param options A JavaScript object containing initialization data for
         * the TrendLine Series.
         */
        constructor(options?: any);
        /**
         * Gets or sets the fit type of the trendline.
         */
        fitType: TrendLineFitType;
        /**
         * Gets or sets the number of terms in a polynomial or fourier equation.
         *
         * Set this value to an integer greater than 1.
         * It gets applied when the fitType is set to
         * wijmo.chart.analytics.TrendLineFitType.Polynomial or
         * wijmo.chart.analytics.TrendLineFitType.Fourier.
         */
        order: number;
        /**
         * Gets the coefficients of the equation.
         */
        coefficients: number[];
        _initProperties(o: any): void;
        _calculateValues(): void;
        /**
         * Gets the approximate y value from the given x value.
         *
         * @param x The x value to be used for calculating the Y value.
         */
        approximate(x: number): number;
        /**
         * Gets the formatted equation string for the coefficients.
         *
         * @param fmt The formatting function for the coefficients. Returns formatted
         * string on the basis of coefficients. This parameter is optional.
         */
        getEquation(fmt?: Function): string;
    }
}

declare module wijmo.chart.analytics {
    /**
     * Represents a base class of function series for @see:wijmo.chart.FlexChart.
     */
    class FunctionSeries extends TrendLineBase {
        private _min;
        private _max;
        /**
         * Initializes a new instance of the @see:FunctionSeries class.
         *
         * @param options A JavaScript object containing initialization data for the
         * FunctionSeries.
         */
        constructor(options?: any);
        /**
         * Gets or sets the minimum value of the parameter for calculating a function.
         */
        min: number;
        /**
         * Gets or sets the maximum value of the parameter for calculating a function.
         */
        max: number;
        getValues(dim: number): number[];
        _initProperties(o: any): void;
        _calculateValues(): void;
        _validateValue(value: number): number;
        _calculateValue(func: Function, parameter: number): number;
        _calculateX(value: number): number;
        _calculateY(value: number): number;
    }
    /**
     * Represents a Y function series of @see:wijmo.chart.FlexChart.
     *
     * The @see::YFunctionSeries allows to plot a function defined by formula y=f(x).
     */
    class YFunctionSeries extends FunctionSeries {
        private _func;
        /**
         * Initializes a new instance of the @see:YFunctionSeries class.
         *
         * @param options A JavaScript object containing initialization data for the
         * YFunctionSeries.
         */
        constructor(options?: any);
        /**
         * Gets or sets the function used to calculate Y value.
         */
        func: Function;
        _calculateX(value: number): number;
        _calculateY(value: number): number;
        /**
         * Gets the approximate y value from the given x value.
         *
         * @param x The x value to be used for calculating the Y value.
         */
        approximate(x: number): number;
    }
    /**
     * Represents a parametric function series for @see:wijmo.chart.FlexChart.
     *
     * The @see::ParametricFunctionSeries allows to plot a function defined by formulas
     * x=f(t) and y=f(t).
     * The x and y values are calcluated by the given xFunc and yFunc.
     */
    class ParametricFunctionSeries extends FunctionSeries {
        private _xFunc;
        private _yFunc;
        /**
         * Initializes a new instance of the @see:ParametricFunctionSeries class.
         *
         * @param options A JavaScript object containing initialization data for the
         * ParametricFunctionSeries.
         */
        constructor(options?: any);
        /**
         * Gets or sets the function used to calculate the x value.
         */
        xFunc: Function;
        /**
         * Gets or sets the function used to calculate the y value.
         */
        yFunc: Function;
        _calculateX(value: number): number;
        _calculateY(value: number): number;
        /**
         * Gets the approximate x and y from the given value.
         *
         * @param value The value to calculate.
         */
        approximate(value: number): any;
    }
}

declare module wijmo.chart.analytics {
    /**
     * Specifies the type of MovingAverage Series.
     */
    enum MovingAverageType {
        /**
         * An average of the last n values.
         */
        Simple = 0,
        /**
         * Weighted average of the last n values,
         * where the weightage decreases by 1 with each previous value.
         */
        Weighted = 1,
        /**
         * Weighted average of the last n values,
         * where the weightage decreases exponentially with each previous value.
         */
        Exponential = 2,
        /**
         * Weighted average of the last n values,
         * whose result is equivalent to a double smoothed simple moving average.
         */
        Triangular = 3,
    }
    /**
     * Represents a moving average trendline for @see:FlexChart and @see:FinancialChart.
     * It is a calculation to analyze data points by creating a series of averages of
     * different subsets of the full data set. You may define a different type on each
     * @see:MovingAverage object by setting the type property on the MovingAverage itself.
     * The MovingAverage class has a period property that allows you to set the number of
     * periods for computing the average value.
     */
    class MovingAverage extends TrendLineBase {
        private _period;
        private _type;
        /**
         * Initializes a new instance of the @see:MovingAverage class.
         *
         * @param options A JavaScript object containing initialization data for the MovingAverage Series.
         */
        constructor(options?: any);
        /**
         * Gets or sets the type of the moving average series.
         */
        type: MovingAverageType;
        /**
         * Gets or sets the period of the moving average series.
         * It should be set to integer value greater than 1.
         */
        period: number;
        _initProperties(o: any): void;
        _checkPeriod(): void;
        _calculateValues(): void;
        private _calculateSimple(x, y, forTMA?);
        private _calculateWeighted(x, y);
        private _calculateExponential(x, y);
        private _calculateTriangular(x, y);
    }
}

