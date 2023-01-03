!function (t, e) {
    if ("function" == typeof define && define.amd) define(["moment", "jquery", "exports"], (function (a, i, s) {
        t.daterangepicker = e(t, s, a, i)
    })); else if ("undefined" != typeof exports) {
        var a = "undefined" != typeof window ? window.jQuery : void 0;
        if (!a) try {
            a.fn || (a.fn = {})
        } catch (t) {
            if (!a) throw new Error("jQuery dependency not found")
        }
        e(t, exports, momentjs, a)
    } else t.daterangepicker = e(t, {}, t.moment || moment, t.jQuery || t.Zepto || t.ender || t.$)
}(this || {}, (function (t, e, a, i) {
    var s = function (t, e, s) {
        e.jalaali, this.parentEl = "body", this.element = i(t), this.startDate = a().startOf("day"), this.endDate = a().endOf("day"), this.minDate = !1, this.maxDate = !1, this.dateLimit = !1, this.autoApply = !1, this.singleDatePicker = !1, this.showDropdowns = !1, this.showWeekNumbers = !1, this.timePicker = !1, this.timePicker24Hour = !1, this.timePickerIncrement = 1, this.timePickerSeconds = !1, this.linkedCalendars = !0, this.autoUpdateInput = !0, this.language = "en", this.ranges = {}, this.jalaali = !1, this.opens = "right", this.element.hasClass("pull-right") && (this.opens = "left"), this.drops = "down", this.element.hasClass("dropup") && (this.drops = "up"), this.buttonClasses = "btn btn-sm", this.applyClass = "btn-success", this.cancelClass = "btn-default", this.locale = {
            format: "MM/DD/YYYY",
            separator: " - ",
            applyLabel: "Apply",
            cancelLabel: "Cancel",
            weekLabel: "W",
            customRangeLabel: "Custom Range",
            daysOfWeek: a.weekdaysMin(),
            monthNames: a.monthsShort(),
            firstDay: a.localeData().firstDayOfWeek()
        };
        var n, r, o;
        if (this.callback = function () {
        }, this.isShowing = !1, this.leftCalendar = {}, this.rightCalendar = {}, "object" == typeof e && null !== e || (e = {}), "string" != typeof (e = i.extend(this.element.data(), e)).template && (e.template = '<div class="daterangepicker dropdown-menu"><div class="calendar left"><div class="daterangepicker_input"><input class="input-mini" type="text" name="daterangepicker_start" value="" /><i class="drp-calendar5"></i><div class="calendar-time"><div></div><i class="fa fa-clock-o glyphicon glyphdrp-time"></i></div></div><div class="calendar-table"></div></div><div class="calendar right"><div class="daterangepicker_input"><input class="input-mini" type="text" name="daterangepicker_end" value="" /><i class="drp-calendar5"></i><div class="calendar-time"><div></div><i class="fa fa-clock-o glyphicon glyphdrp-time"></i></div></div><div class="calendar-table"></div></div><div class="ranges"><div class="range_inputs"><button class="applyBtn" disabled="disabled" type="button"></button> <button class="cancelBtn" type="button"></button></div></div></div>'), this.parentEl = e.parentEl && i(e.parentEl).length ? i(e.parentEl) : i(this.parentEl), this.container = i(e.template).appendTo(this.parentEl), e.jalaali && (this.locale = {
            format: "jYYYY/jMM/jDD",
            separator: " - ",
            applyLabel: "ثبت",
            cancelLabel: "لغو",
            weekLabel: "W",
            customRangeLabel: "بازه دلخواه",
            daysOfWeek: ["ی", "د", "س", "چ", "پ", "ج", "ش"],
            monthNames: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
            firstDay: 6
        }), "object" == typeof e.locale && ("string" == typeof e.locale.format && (this.locale.format = e.locale.format), "string" == typeof e.locale.separator && (this.locale.separator = e.locale.separator), "object" == typeof e.locale.daysOfWeek && (this.locale.daysOfWeek = e.locale.daysOfWeek.slice()), "object" == typeof e.locale.monthNames && (this.locale.monthNames = e.locale.monthNames.slice()), "number" == typeof e.locale.firstDay && (this.locale.firstDay = e.locale.firstDay), "string" == typeof e.locale.applyLabel && (this.locale.applyLabel = e.locale.applyLabel), "string" == typeof e.locale.cancelLabel && (this.locale.cancelLabel = e.locale.cancelLabel), "string" == typeof e.locale.weekLabel && (this.locale.weekLabel = e.locale.weekLabel), "string" == typeof e.locale.customRangeLabel && (this.locale.customRangeLabel = e.locale.customRangeLabel)), "string" == typeof e.startDate && (this.startDate = a(e.startDate, this.locale.format)), "string" == typeof e.endDate && (this.endDate = a(e.endDate, this.locale.format)), "string" == typeof e.minDate && (this.minDate = a(e.minDate, this.locale.format)), "string" == typeof e.maxDate && (this.maxDate = a(e.maxDate, this.locale.format)), "object" == typeof e.startDate && (this.startDate = a(e.startDate)), "object" == typeof e.endDate && (this.endDate = a(e.endDate)), "object" == typeof e.minDate && (this.minDate = a(e.minDate)), "object" == typeof e.maxDate && (this.maxDate = a(e.maxDate)), this.minDate && this.startDate.isBefore(this.minDate) && (this.startDate = this.minDate.clone()), this.maxDate && this.endDate.isAfter(this.maxDate) && (this.endDate = this.maxDate.clone()), "string" == typeof e.applyClass && (this.applyClass = e.applyClass), "string" == typeof e.cancelClass && (this.cancelClass = e.cancelClass), "object" == typeof e.dateLimit && (this.dateLimit = e.dateLimit), "string" == typeof e.opens && (this.opens = e.opens), "string" == typeof e.language && (this.language = e.language), "string" == typeof e.drops && (this.drops = e.drops), "boolean" == typeof e.showWeekNumbers && (this.showWeekNumbers = e.showWeekNumbers), "string" == typeof e.buttonClasses && (this.buttonClasses = e.buttonClasses), "object" == typeof e.buttonClasses && (this.buttonClasses = e.buttonClasses.join(" ")), "boolean" == typeof e.showDropdowns && (this.showDropdowns = e.showDropdowns), "boolean" == typeof e.singleDatePicker && (this.singleDatePicker = e.singleDatePicker, this.singleDatePicker && (this.endDate = this.startDate.clone())), "boolean" == typeof e.timePicker && (this.timePicker = e.timePicker), "boolean" == typeof e.timePickerSeconds && (this.timePickerSeconds = e.timePickerSeconds), "number" == typeof e.timePickerIncrement && (this.timePickerIncrement = e.timePickerIncrement), "boolean" == typeof e.timePicker24Hour && (this.timePicker24Hour = e.timePicker24Hour), "boolean" == typeof e.autoApply && (this.autoApply = e.autoApply), "boolean" == typeof e.autoUpdateInput && (this.autoUpdateInput = e.autoUpdateInput), "boolean" == typeof e.linkedCalendars && (this.linkedCalendars = e.linkedCalendars), "function" == typeof e.isInvalidDate && (this.isInvalidDate = e.isInvalidDate), 0 != this.locale.firstDay) for (var l = this.locale.firstDay; l > 0;) this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift()), l--;
        if (void 0 === e.startDate && void 0 === e.endDate && i(this.element).is("input[type=text]")) {
            var h = i(this.element).val(), c = h.split(this.locale.separator);
            n = r = null, 2 == c.length ? (n = a(c[0], this.locale.format), r = a(c[1], this.locale.format)) : this.singleDatePicker && "" !== h && (n = a(h, this.locale.format), r = a(h, this.locale.format)), null !== n && null !== r && (this.setStartDate(n), this.setEndDate(r))
        }
        if ("object" == typeof e.ranges) {
            for (o in e.ranges) {
                n = "string" == typeof e.ranges[o][0] ? a(e.ranges[o][0], this.locale.format) : a(e.ranges[o][0]), r = "string" == typeof e.ranges[o][1] ? a(e.ranges[o][1], this.locale.format) : a(e.ranges[o][1]), this.minDate && n.isBefore(this.minDate) && (n = this.minDate.clone());
                var d = this.maxDate;
                if (this.dateLimit && n.clone().add(this.dateLimit).isAfter(d) && (d = n.clone().add(this.dateLimit)), d && r.isAfter(d) && (r = d.clone()), !(this.minDate && r.isBefore(this.minDate) || d && n.isAfter(d))) {
                    var m = document.createElement("textarea");
                    m.innerHTML = o;
                    var f = m.value;
                    this.ranges[f] = [n, r]
                }
            }
            var p = "<ul>";
            for (o in this.ranges) p += "<li>" + o + "</li>";
            p += "<li>" + this.locale.customRangeLabel + "</li>", p += "</ul>", this.container.find(".ranges").prepend(p)
        }
        if ("function" == typeof s && (this.callback = s), this.timePicker || (this.startDate = this.startDate.startOf("day"), this.endDate = this.endDate.endOf("day"), this.container.find(".calendar-time").hide()), this.timePicker && this.autoApply && (this.autoApply = !1), this.autoApply && "object" != typeof e.ranges ? this.container.find(".ranges").hide() : this.autoApply && this.container.find(".applyBtn, .cancelBtn").addClass("hide"), this.singleDatePicker && (this.container.addClass("single"), this.container.find(".calendar.left").addClass("single"), this.container.find(".calendar.left").show(), this.container.find(".calendar.right").hide(), this.container.find(".daterangepicker_input input, .daterangepicker_input i").hide(), this.timePicker || this.container.find(".ranges").hide()), void 0 !== e.ranges || this.singleDatePicker || this.container.addClass("show-calendar"), this.container.addClass("opens" + this.opens), void 0 !== e.ranges && "right" == this.opens) {
            var u = this.container.find(".ranges"), D = u.clone();
            u.remove(), this.container.find(".calendar.left").parent().prepend(D)
        }
        this.container.find(".applyBtn, .cancelBtn").addClass(this.buttonClasses), this.applyClass.length && this.container.find(".applyBtn").addClass(this.applyClass), this.cancelClass.length && this.container.find(".cancelBtn").addClass(this.cancelClass), this.container.find(".applyBtn").html(this.locale.applyLabel), this.container.find(".cancelBtn").html(this.locale.cancelLabel), this.container.find(".calendar").on("click.daterangepicker", ".prev", i.proxy(this.clickPrev, this)).on("click.daterangepicker", ".next", i.proxy(this.clickNext, this)).on("click.daterangepicker", "td.available", i.proxy(this.clickDate, this)).on("mouseenter.daterangepicker", "td.available", i.proxy(this.hoverDate, this)).on("mouseleave.daterangepicker", "td.available", i.proxy(this.updateFormInputs, this)).on("change.daterangepicker", "select.yearselect", i.proxy(this.monthOrYearChanged, this)).on("change.daterangepicker", "select.monthselect", i.proxy(this.monthOrYearChanged, this)).on("change.daterangepicker", "select.hourselect,select.minuteselect,select.secondselect,select.ampmselect", i.proxy(this.timeChanged, this)).on("click.daterangepicker", ".daterangepicker_input input", i.proxy(this.showCalendars, this)).on("change.daterangepicker", ".daterangepicker_input input", i.proxy(this.formInputsChanged, this)), this.container.find(".ranges").on("click.daterangepicker", "button.applyBtn", i.proxy(this.clickApply, this)).on("click.daterangepicker", "button.cancelBtn", i.proxy(this.clickCancel, this)).on("click.daterangepicker", "li", i.proxy(this.clickRange, this)).on("mouseenter.daterangepicker", "li", i.proxy(this.hoverRange, this)).on("mouseleave.daterangepicker", "li", i.proxy(this.updateFormInputs, this)), this.element.is("input") ? this.element.on({
            "click.daterangepicker": i.proxy(this.show, this),
            "focus.daterangepicker": i.proxy(this.show, this),
            "keyup.daterangepicker": i.proxy(this.elementChanged, this),
            "keydown.daterangepicker": i.proxy(this.keydown, this)
        }) : this.element.on("click.daterangepicker", i.proxy(this.toggle, this)), this.element.is("input") && !this.singleDatePicker && this.autoUpdateInput ? (this.element.val(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format)), this.element.trigger("change")) : this.element.is("input") && this.autoUpdateInput && (this.element.val(this.startDate.format(this.locale.format)), this.element.trigger("change"))
    };

    function n(t, e) {
        return e < 6 ? 31 : e < 11 || a.jIsLeapYear(t) ? 30 : 29
    }

    return s.prototype = {
        constructor: s, setStartDate: function (t) {
            "string" == typeof t && (this.startDate = a(t, this.locale.format)), "object" == typeof t && (this.startDate = a(t)), this.timePicker || (this.startDate = this.startDate.startOf("day")), this.timePicker && this.timePickerIncrement && this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement), this.minDate && this.startDate.isBefore(this.minDate) && (this.startDate = this.minDate), this.maxDate && this.startDate.isAfter(this.maxDate) && (this.startDate = this.maxDate), this.isShowing || this.updateElement(), this.updateMonthsInView()
        }, setEndDate: function (t) {
            "string" == typeof t && (this.endDate = a(t, this.locale.format)), "object" == typeof t && (this.endDate = a(t)), this.timePicker || (this.endDate = this.endDate.endOf("day")), this.timePicker && this.timePickerIncrement && this.endDate.minute(Math.round(this.endDate.minute() / this.timePickerIncrement) * this.timePickerIncrement), this.endDate.isBefore(this.startDate) && (this.endDate = this.startDate.clone()), this.maxDate && this.endDate.isAfter(this.maxDate) && (this.endDate = this.maxDate), this.dateLimit && this.startDate.clone().add(this.dateLimit).isBefore(this.endDate) && (this.endDate = this.startDate.clone().add(this.dateLimit)), this.previousRightTime = this.endDate.clone(), this.isShowing || this.updateElement(), this.updateMonthsInView()
        }, isInvalidDate: function () {
            return !1
        }, updateView: function () {
            this.timePicker && (this.renderTimePicker("left"), this.renderTimePicker("right"), this.endDate ? this.container.find(".right .calendar-time select").removeAttr("disabled").removeClass("disabled") : this.container.find(".right .calendar-time select").attr("disabled", "disabled").addClass("disabled")), this.endDate ? (this.container.find('input[name="daterangepicker_end"]').removeClass("active"), this.container.find('input[name="daterangepicker_start"]').addClass("active")) : (this.container.find('input[name="daterangepicker_end"]').addClass("active"), this.container.find('input[name="daterangepicker_start"]').removeClass("active")), this.updateMonthsInView(), this.updateCalendars(), this.updateFormInputs()
        }, updateMonthsInView: function () {
            if (this.endDate) {
                var t = this.element.data().jalaali;
                if (!this.singleDatePicker && this.leftCalendar.month && this.rightCalendar.month && (this.startDate.format("YYYY-MM") == this.leftCalendar.month.format("YYYY-MM") || this.startDate.format("YYYY-MM") == this.rightCalendar.month.format("YYYY-MM")) && (this.endDate.format("YYYY-MM") == this.leftCalendar.month.format("YYYY-MM") || this.endDate.format("YYYY-MM") == this.rightCalendar.month.format("YYYY-MM"))) return;
                this.leftCalendar.month = t ? this.startDate.clone().jDate(2) : this.startDate.clone().date(2), this.linkedCalendars || this.endDate.month() == this.startDate.month() && this.endDate.year() == this.startDate.year() ? this.rightCalendar.month = t ? this.startDate.clone().jDate(2).add(1, "jMonth") : this.startDate.clone().date(2).add(1, "month") : this.rightCalendar.month = t ? this.endDate.clone().jDate(2) : this.endDate.clone().date(2)
            } else this.leftCalendar.month.format("YYYY-MM") != this.startDate.format("YYYY-MM") && this.rightCalendar.month.format("YYYY-MM") != this.startDate.format("YYYY-MM") && (this.leftCalendar.month = t ? this.startDate.clone().jDate(2) : this.startDate.clone().date(2), this.rightCalendar.month = t ? this.startDate.clone().jDate(2).add(1, "jMonth") : this.startDate.clone().date(2).add(1, "month"))
        }, updateCalendars: function () {
            if (this.timePicker) {
                var t, e, a, i;
                if (this.endDate) {
                    if (t = parseInt(this.container.find(".left .hourselect").val(), 10), e = parseInt(this.container.find(".left .minuteselect").val(), 10), a = this.timePickerSeconds ? parseInt(this.container.find(".left .secondselect").val(), 10) : 0, !this.timePicker24Hour) "PM" === (i = this.container.find(".left .ampmselect").val()) && t < 12 && (t += 12), "AM" === i && 12 === t && (t = 0)
                } else if (t = parseInt(this.container.find(".right .hourselect").val(), 10), e = parseInt(this.container.find(".right .minuteselect").val(), 10), a = this.timePickerSeconds ? parseInt(this.container.find(".right .secondselect").val(), 10) : 0, !this.timePicker24Hour) "PM" === (i = this.container.find(".right .ampmselect").val()) && t < 12 && (t += 12), "AM" === i && 12 === t && (t = 0);
                this.leftCalendar.month.hour(t).minute(e).second(a), this.rightCalendar.month.hour(t).minute(e).second(a)
            }
            if (this.renderCalendar("left"), this.renderCalendar("right"), this.container.find(".ranges li").removeClass("active"), null != this.endDate) {
                var s = !0, n = 0;
                for (var r in this.ranges) {
                    if (this.timePicker) {
                        if (this.startDate.isSame(this.ranges[r][0]) && this.endDate.isSame(this.ranges[r][1])) {
                            s = !1, this.chosenLabel = this.container.find(".ranges li:eq(" + n + ")").addClass("active").html();
                            break
                        }
                    } else if (this.startDate.format("YYYY-MM-DD") == this.ranges[r][0].format("YYYY-MM-DD") && this.endDate.format("YYYY-MM-DD") == this.ranges[r][1].format("YYYY-MM-DD")) {
                        s = !1, this.chosenLabel = this.container.find(".ranges li:eq(" + n + ")").addClass("active").html();
                        break
                    }
                    n++
                }
                s && (this.chosenLabel = this.container.find(".ranges li:last").addClass("active").html(), this.showCalendars())
            }
        }, renderCalendar: function (t) {
            var e, s, r, o, l, h, c, d, m, f, p, u, D = this.element.data().jalaali,
                g = "left" == t ? this.leftCalendar : this.rightCalendar;
            D ? (e = g.month.jMonth(), s = g.month.jYear(), r = g.month.hour(), o = g.month.minute(), l = g.month.second(), h = n(s, e), c = a(s + "/" + (e + 1) + "/1", "jYYYY/jMM/jDD"), d = a(s + "/" + (e + 1) + "/" + h, "jYYYY/jMM/jDD"), m = a(c).subtract(1, "jMonth").jMonth(), p = n(f = a(c).subtract(1, "jMonth").jYear(), m), u = c.day()) : (e = g.month.month(), s = g.month.year(), r = g.month.hour(), o = g.month.minute(), l = g.month.second(), h = a([s, e]).daysInMonth(), c = a([s, e, 1]), d = a([s, e, h]), m = a(c).subtract(1, "month").month(), f = a(c).subtract(1, "month").year(), p = a([f, m]).daysInMonth(), u = c.day()), (g = []).firstDay = c, g.lastDay = d;
            for (var k = 0; k < 6; k++) g[k] = [];
            var v = p - u + this.locale.firstDay + 1;
            v > p && (v -= 7), u == this.locale.firstDay && (v = p - 6);
            for (var y = D ? a(f + "/" + (m + 1) + "/" + v + " 12:" + o + ":" + l, "jYYYY/jMM/jDD HH:mm:ss") : a([f, m, v, 12, o, l]), b = (k = 0, 0), C = 0; k < 42; k++, b++, y = a(y).add(24, "hour")) k > 0 && b % 7 == 0 && (b = 0, C++), g[C][b] = y.clone().hour(r).minute(o).second(l), y.hour(12), this.minDate && g[C][b].format("YYYY-MM-DD") == this.minDate.format("YYYY-MM-DD") && g[C][b].isBefore(this.minDate) && "left" == t && (g[C][b] = this.minDate.clone()), this.maxDate && g[C][b].format("YYYY-MM-DD") == this.maxDate.format("YYYY-MM-DD") && g[C][b].isAfter(this.maxDate) && "right" == t && (g[C][b] = this.maxDate.clone());
            "left" == t ? this.leftCalendar.calendar = g : this.rightCalendar.calendar = g;
            var Y = "left" == t ? this.minDate : this.startDate, M = this.maxDate,
                P = ("left" == t ? this.startDate : this.endDate, this.language), w = '<table class="table-condensed">';
            w += "<thead>", w += "<tr>", this.showWeekNumbers && (w += "<th></th>"), Y && !Y.isBefore(g.firstDay) || this.linkedCalendars && "left" != t ? w += "<th></th>" : w += '<th class="prev available"><i class="drp-angle-left"></i></th>';
            var x = this.locale.monthNames[D ? g[1][1].jMonth() : g[1][1].month()] + g[1][1].format(D ? " jYYYY" : " YYYY"),
                j = D ? "jMonth" : "month", I = D ? "jYear" : "year";
            if (this.showDropdowns) {
                var L = g[1][1][j](), A = g[1][1][I](), B = M && M[I]() || A + 5, S = Y && Y[I]() || A - 50, _ = A == S,
                    E = A == B;
                // console.log(g[1][1]), console.log(L), console.log(A);
                for (var W = '<select class="monthselect form-control">', H = 0; H < 12; H++) (!_ || H >= Y[j]()) && (!E || H <= M[j]()) ? W += "<option value='" + H + "'" + (H === L ? " selected='selected'" : "") + ">" + this.locale.monthNames[H] + "</option>" : W += "<option value='" + H + "'" + (H === L ? " selected='selected'" : "") + " disabled='disabled'>" + this.locale.monthNames[H] + "</option>";
                W += "</select>";
                for (var O = '<select class="yearselect form-control">', N = S; N <= B; N++) O += '<option value="' + N + '"' + (N === A ? ' selected="selected"' : "") + ">" + N + "</option>";
                x = W + (O += "</select>")
            }

            function R(t) {
                var e, a = [];
                do {
                    t = (t - (e = t % 10)) / 10, a.unshift(["&#", e + 1776, ";"].join(""))
                } while (t > 0);
                return a.join("")
            }

            if (w += '<th colspan="5" class="month">' + x + "</th>", M && !M.isAfter(g.lastDay) || this.linkedCalendars && "right" != t && !this.singleDatePicker ? w += "<th></th>" : w += '<th class="next available"><i class="drp-angle-right"></i></th>', w += "</tr>", w += "<tr>", this.showWeekNumbers && (w += '<th class="week">' + this.locale.weekLabel + "</th>"), i.each(this.locale.daysOfWeek, (function (t, e) {
                w += "<th>" + e + "</th>"
            })), w += "</tr>", w += "</thead>", w += "<tbody>", null == this.endDate && this.dateLimit) {
                var T = this.startDate.clone().add(this.dateLimit).endOf("day");
                M && !T.isBefore(M) || (M = T)
            }
            for (C = 0; C < 6; C++) {
                w += "<tr>", this.showWeekNumbers && (w += '<td class="week">' + g[C][0].week() + "</td>");
                for (b = 0; b < 7; b++) {
                    var V = [];
                    g[C][b].isSame(new Date, "day") && V.push("today"), D ? g[C][b].jMonth() != g[1][1].jMonth() && V.push("off") : g[C][b].month() != g[1][1].month() && V.push("off"), this.minDate && g[C][b].isBefore(this.minDate, "day") && V.push("off", "disabled"), M && g[C][b].isAfter(M, "day") && V.push("off", "disabled"), this.isInvalidDate(g[C][b]) && V.push("off", "disabled"), g[C][b].format("YYYY-MM-DD") == this.startDate.format("YYYY-MM-DD") && V.push("active", "start-date"), null != this.endDate && g[C][b].format("YYYY-MM-DD") == this.endDate.format("YYYY-MM-DD") && V.push("active", "end-date"), null != this.endDate && g[C][b] > this.startDate && g[C][b] < this.endDate && V.push("in-range");
                    var U = "", F = !1;
                    for (k = 0; k < V.length; k++) U += V[k] + " ", "disabled" == V[k] && (F = !0);
                    F || (U += "available"), w += '<td class="' + U.replace(/^\s+|\s+$/g, "") + '" data-toggle="tooltip" data-container="body" data-placement="top" title="' + (D ? g[C][b].format("DD-MMMM-YYYY") : g[C][b].format("jYYYY/jMM/jDD")) + '" data-title="r' + C + "c" + b + '">' + ("en" == P ? D ? g[C][b].jDate() : g[C][b].date() : R(D ? g[C][b].jDate() : g[C][b].date()))
                }
                w += "</tr>"
            }
            w += "</tbody>", w += "</table>", this.container.find(".calendar." + t + " .calendar-table").html(w)
        }, renderTimePicker: function (t) {
            var e, a, i, s = this.maxDate;
            if (!this.dateLimit || this.maxDate && !this.startDate.clone().add(this.dateLimit).isAfter(this.maxDate) || (s = this.startDate.clone().add(this.dateLimit)), "left" == t) a = this.startDate.clone(), i = this.minDate; else if ("right" == t) {
                a = this.endDate ? this.endDate.clone() : this.previousRightTime.clone(), i = this.startDate;
                var n = this.container.find(".calendar.right .calendar-time div");
                if ("" != n.html()) {
                    if (a.hour(n.find(".hourselect option:selected").val() || a.hour()), a.minute(n.find(".minuteselect option:selected").val() || a.minute()), a.second(n.find(".secondselect option:selected").val() || a.second()), !this.timePicker24Hour) {
                        var r = n.find(".ampmselect option:selected").val();
                        "PM" === r && a.hour() < 12 && a.hour(a.hour() + 12), "AM" === r && 12 === a.hour() && a.hour(0)
                    }
                    a.isBefore(this.startDate) && (a = this.startDate.clone()), a.isAfter(s) && (a = s.clone())
                }
            }
            e = '<select class="hourselect form-control">';
            for (var o = this.timePicker24Hour ? 0 : 1, l = this.timePicker24Hour ? 23 : 12, h = o; h <= l; h++) {
                var c = h;
                this.timePicker24Hour || (c = a.hour() >= 12 ? 12 == h ? 12 : h + 12 : 12 == h ? 0 : h);
                var d = a.clone().hour(c), m = !1;
                i && d.minute(59).isBefore(i) && (m = !0), s && d.minute(0).isAfter(s) && (m = !0), c != a.hour() || m ? e += m ? '<option value="' + h + '" disabled="disabled" class="disabled">' + h + "</option>" : '<option value="' + h + '">' + h + "</option>" : e += '<option value="' + h + '" selected="selected">' + h + "</option>"
            }
            e += "</select> ", e += ': <select class="minuteselect form-control">';
            for (h = 0; h < 60; h += this.timePickerIncrement) {
                var f = h < 10 ? "0" + h : h;
                d = a.clone().minute(h), m = !1;
                i && d.second(59).isBefore(i) && (m = !0), s && d.second(0).isAfter(s) && (m = !0), a.minute() != h || m ? e += m ? '<option value="' + h + '" disabled="disabled" class="disabled">' + f + "</option>" : '<option value="' + h + '">' + f + "</option>" : e += '<option value="' + h + '" selected="selected">' + f + "</option>"
            }
            if (e += "</select> ", this.timePickerSeconds) {
                e += ': <select class="secondselect form-control">';
                for (h = 0; h < 60; h++) {
                    f = h < 10 ? "0" + h : h, d = a.clone().second(h), m = !1;
                    i && d.isBefore(i) && (m = !0), s && d.isAfter(s) && (m = !0), a.second() != h || m ? e += m ? '<option value="' + h + '" disabled="disabled" class="disabled">' + f + "</option>" : '<option value="' + h + '">' + f + "</option>" : e += '<option value="' + h + '" selected="selected">' + f + "</option>"
                }
                e += "</select> "
            }
            if (!this.timePicker24Hour) {
                e += '<select class="ampmselect form-control">';
                var p = "", u = "";
                i && a.clone().hour(12).minute(0).second(0).isBefore(i) && (p = ' disabled="disabled" class="disabled"'), s && a.clone().hour(0).minute(0).second(0).isAfter(s) && (u = ' disabled="disabled" class="disabled"'), a.hour() >= 12 ? e += '<option value="AM"' + p + '>AM</option><option value="PM" selected="selected"' + u + ">PM</option>" : e += '<option value="AM" selected="selected"' + p + '>AM</option><option value="PM"' + u + ">PM</option>", e += "</select>"
            }
            this.container.find(".calendar." + t + " .calendar-time div").html(e)
        }, updateFormInputs: function () {
            this.container.find("input[name=daterangepicker_start]").is(":focus") || this.container.find("input[name=daterangepicker_end]").is(":focus") || (this.container.find("input[name=daterangepicker_start]").val(this.startDate.format(this.locale.format)), this.endDate && this.container.find("input[name=daterangepicker_end]").val(this.endDate.format(this.locale.format)), this.singleDatePicker || this.endDate && (this.startDate.isBefore(this.endDate) || this.startDate.isSame(this.endDate)) ? this.container.find("button.applyBtn").removeAttr("disabled") : this.container.find("button.applyBtn").attr("disabled", "disabled"))
        }, move: function () {
            var t, e = {top: 0, left: 0}, a = i(window).width();
            this.parentEl.is("body") || (e = {
                top: this.parentEl.offset().top - this.parentEl.scrollTop(),
                left: this.parentEl.offset().left - this.parentEl.scrollLeft()
            }, a = this.parentEl[0].clientWidth + this.parentEl.offset().left), t = "up" == this.drops ? this.element.offset().top - this.container.outerHeight() - e.top : this.element.offset().top + this.element.outerHeight() - e.top, this.container["up" == this.drops ? "addClass" : "removeClass"]("dropup"), "left" == this.opens ? (this.container.css({
                top: t,
                right: a - this.element.offset().left - this.element.outerWidth(),
                left: "auto"
            }), this.container.offset().left < 0 && this.container.css({
                right: "auto",
                left: 9
            })) : "center" == this.opens ? (this.container.css({
                top: t,
                left: this.element.offset().left - e.left + this.element.outerWidth() / 2 - this.container.outerWidth() / 2,
                right: "auto"
            }), this.container.offset().left < 0 && this.container.css({
                right: "auto",
                left: 9
            })) : (this.container.css({
                top: t,
                left: this.element.offset().left - e.left,
                right: "auto"
            }), this.container.offset().left + this.container.outerWidth() > i(window).width() && this.container.css({
                left: "auto",
                right: 0
            }))
        }, show: function (t) {
            this.isShowing || (this._outsideClickProxy = i.proxy((function (t) {
                this.outsideClick(t)
            }), this), i(document).on("mousedown.daterangepicker", this._outsideClickProxy).on("touchend.daterangepicker", this._outsideClickProxy).on("click.daterangepicker", "[data-toggle=dropdown]", this._outsideClickProxy).on("focusin.daterangepicker", this._outsideClickProxy), i(window).on("resize.daterangepicker", i.proxy((function (t) {
                this.move(t)
            }), this)), this.oldStartDate = this.startDate.clone(), this.oldEndDate = this.endDate.clone(), this.previousRightTime = this.endDate.clone(), this.updateView(), this.container.show(), this.move(), this.element.trigger("show.daterangepicker", this), this.isShowing = !0)
        }, hide: function (t) {
            this.isShowing && (this.endDate || (this.startDate = this.oldStartDate.clone(), this.endDate = this.oldEndDate.clone()), this.startDate.isSame(this.oldStartDate) && this.endDate.isSame(this.oldEndDate) || this.callback(this.startDate, this.endDate, this.chosenLabel), this.updateElement(), i(document).off(".daterangepicker"), i(window).off(".daterangepicker"), this.container.hide(), this.element.trigger("hide.daterangepicker", this), this.isShowing = !1)
        }, toggle: function (t) {
            this.isShowing ? this.hide() : this.show()
        }, outsideClick: function (t) {
            var e = i(t.target);
            "focusin" == t.type || e.closest(this.element).length || e.closest(this.container).length || e.closest(".calendar-table").length || this.hide()
        }, showCalendars: function () {
            this.container.addClass("show-calendar"), this.move(), this.element.trigger("showCalendar.daterangepicker", this)
        }, hideCalendars: function () {
            this.container.removeClass("show-calendar"), this.element.trigger("hideCalendar.daterangepicker", this)
        }, hoverRange: function (t) {
            if (!this.container.find("input[name=daterangepicker_start]").is(":focus") && !this.container.find("input[name=daterangepicker_end]").is(":focus")) {
                var e = t.target.innerHTML;
                if (e == this.locale.customRangeLabel) this.updateView(); else {
                    var a = this.ranges[e];
                    this.container.find("input[name=daterangepicker_start]").val(a[0].format(this.locale.format)), this.container.find("input[name=daterangepicker_end]").val(a[1].format(this.locale.format))
                }
            }
        }, clickRange: function (t) {
            var e = t.target.innerHTML;
            if (this.chosenLabel = e, e == this.locale.customRangeLabel) this.showCalendars(); else {
                var a = this.ranges[e];
                this.startDate = a[0], this.endDate = a[1], this.timePicker || (this.startDate.startOf("day"), this.endDate.endOf("day")), this.hideCalendars(), this.clickApply()
            }
        }, clickPrev: function (t) {
            i(t.target).parents(".calendar").hasClass("left") ? (this.leftCalendar.month.subtract(1, "month"), this.linkedCalendars && this.rightCalendar.month.subtract(1, "month")) : this.rightCalendar.month.subtract(1, "month"), this.updateCalendars()
        }, clickNext: function (t) {
            i(t.target).parents(".calendar").hasClass("left") ? this.leftCalendar.month.add(1, "month") : (this.rightCalendar.month.add(1, "month"), this.linkedCalendars && this.leftCalendar.month.add(1, "month")), this.updateCalendars()
        }, hoverDate: function (t) {
            if (!this.container.find("input[name=daterangepicker_start]").is(":focus") && !this.container.find("input[name=daterangepicker_end]").is(":focus") && i(t.target).hasClass("available")) {
                var e = i(t.target).attr("data-title"), a = e.substr(1, 1), s = e.substr(3, 1),
                    n = i(t.target).parents(".calendar").hasClass("left") ? this.leftCalendar.calendar[a][s] : this.rightCalendar.calendar[a][s];
                this.endDate ? this.container.find("input[name=daterangepicker_start]").val(n.format(this.locale.format)) : this.container.find("input[name=daterangepicker_end]").val(n.format(this.locale.format));
                var r = this.leftCalendar, o = this.rightCalendar, l = this.startDate;
                this.endDate || this.container.find(".calendar td").each((function (t, e) {
                    if (!i(e).hasClass("week")) {
                        var a = i(e).attr("data-title"), s = a.substr(1, 1), h = a.substr(3, 1),
                            c = i(e).parents(".calendar").hasClass("left") ? r.calendar[s][h] : o.calendar[s][h];
                        c.isAfter(l) && c.isBefore(n) ? (i(e).addClass("in-range"), i(e).next().addClass("selected-end")) : (i(e).removeClass("in-range"), i(e).next().removeClass("selected-end"))
                    }
                }))
            }
        }, clickDate: function (t) {
            if (i(t.target).hasClass("available")) {
                var e = i(t.target).attr("data-title"), a = e.substr(1, 1), s = e.substr(3, 1),
                    n = i(t.target).parents(".calendar").hasClass("left") ? this.leftCalendar.calendar[a][s] : this.rightCalendar.calendar[a][s];
                if (this.endDate || n.isBefore(this.startDate, "day")) {
                    if (this.timePicker) {
                        var r = parseInt(this.container.find(".left .hourselect").val(), 10);
                        if (!this.timePicker24Hour) "PM" === (h = this.container.find(".left .ampmselect").val()) && r < 12 && (r += 12), "AM" === h && 12 === r && (r = 0);
                        var o = parseInt(this.container.find(".left .minuteselect").val(), 10),
                            l = this.timePickerSeconds ? parseInt(this.container.find(".left .secondselect").val(), 10) : 0;
                        n = n.clone().hour(r).minute(o).second(l)
                    }
                    this.endDate = null, this.setStartDate(n.clone())
                } else if (!this.endDate && n.isBefore(this.startDate)) this.setEndDate(this.startDate.clone()); else {
                    if (this.timePicker) {
                        var h;
                        r = parseInt(this.container.find(".right .hourselect").val(), 10);
                        if (!this.timePicker24Hour) "PM" === (h = this.container.find(".right .ampmselect").val()) && r < 12 && (r += 12), "AM" === h && 12 === r && (r = 0);
                        o = parseInt(this.container.find(".right .minuteselect").val(), 10), l = this.timePickerSeconds ? parseInt(this.container.find(".right .secondselect").val(), 10) : 0;
                        n = n.clone().hour(r).minute(o).second(l)
                    }
                    this.setEndDate(n.clone()), this.autoApply && this.clickApply()
                }
                this.singleDatePicker && (this.setEndDate(this.startDate), this.timePicker || this.clickApply()), this.updateView()
            }
        }, clickApply: function (t) {
            this.hide(), this.element.trigger("apply.daterangepicker", this)
        }, clickCancel: function (t) {
            this.startDate = this.oldStartDate, this.endDate = this.oldEndDate, this.hide(), this.element.trigger("cancel.daterangepicker", this)
        }, monthOrYearChanged: function (t) {
            var e = this.element.data().jalaali, s = i(t.target).closest(".calendar").hasClass("left"),
                n = s ? "left" : "right", r = this.container.find(".calendar." + n),
                o = parseInt(r.find(".monthselect").val(), 10), l = r.find(".yearselect").val();
            if (e) {
                // console.log(o), console.log(l);
                var h = a(l + "/" + o + "/15", "jYYYY/jM/jD");
                o = h.month(), l = h.year()
            }
            /*console.log(o), console.log(l),*/ s || (l < this.startDate.year() || l == this.startDate.year() && o < this.startDate.month()) && (o = this.startDate.month(), l = this.startDate.year()), this.minDate && (l < this.minDate.year() || l == this.minDate.year() && o < this.minDate.month()) && (o = this.minDate.month(), l = this.minDate.year()), this.maxDate && (l > this.maxDate.year() || l == this.maxDate.year() && o > this.maxDate.month()) && (o = this.maxDate.month(), l = this.maxDate.year()), s ? (this.leftCalendar.month.month(o).year(l), this.linkedCalendars && (this.rightCalendar.month = this.leftCalendar.month.clone().add(1, "month"))) : (this.rightCalendar.month.month(o).year(l), this.linkedCalendars && (this.leftCalendar.month = this.rightCalendar.month.clone().subtract(1, "month"))), /*console.log(this.rightCalendar.month), console.log(this.leftCalendar.month),*/ this.updateCalendars()
        }, timeChanged: function (t) {
            var e = i(t.target).closest(".calendar"), a = e.hasClass("left"),
                s = parseInt(e.find(".hourselect").val(), 10), n = parseInt(e.find(".minuteselect").val(), 10),
                r = this.timePickerSeconds ? parseInt(e.find(".secondselect").val(), 10) : 0;
            if (!this.timePicker24Hour) {
                var o = e.find(".ampmselect").val();
                "PM" === o && s < 12 && (s += 12), "AM" === o && 12 === s && (s = 0)
            }
            if (a) {
                var l = this.startDate.clone();
                l.hour(s), l.minute(n), l.second(r), this.setStartDate(l), this.singleDatePicker ? this.endDate = this.startDate.clone() : this.endDate && this.endDate.format("YYYY-MM-DD") == l.format("YYYY-MM-DD") && this.endDate.isBefore(l) && this.setEndDate(l.clone())
            } else if (this.endDate) {
                var h = this.endDate.clone();
                h.hour(s), h.minute(n), h.second(r), this.setEndDate(h)
            }
            this.updateCalendars(), this.updateFormInputs(), this.renderTimePicker("left"), this.renderTimePicker("right")
        }, formInputsChanged: function (t) {
            var e = i(t.target).closest(".calendar").hasClass("right"),
                s = a(this.container.find('input[name="daterangepicker_start"]').val(), this.locale.format),
                n = a(this.container.find('input[name="daterangepicker_end"]').val(), this.locale.format);
            s.isValid() && n.isValid() && (e && n.isBefore(s) && (s = n.clone()), this.setStartDate(s), this.setEndDate(n), e ? this.container.find('input[name="daterangepicker_start"]').val(this.startDate.format(this.locale.format)) : this.container.find('input[name="daterangepicker_end"]').val(this.endDate.format(this.locale.format))), this.updateCalendars(), this.timePicker && (this.renderTimePicker("left"), this.renderTimePicker("right"))
        }, elementChanged: function () {
            if (this.element.is("input") && this.element.val().length && !(this.element.val().length < this.locale.format.length)) {
                var t = this.element.val().split(this.locale.separator), e = null, i = null;
                2 === t.length && (e = a(t[0], this.locale.format), i = a(t[1], this.locale.format)), (this.singleDatePicker || null === e || null === i) && (i = e = a(this.element.val(), this.locale.format)), e.isValid() && i.isValid() && (this.setStartDate(e), this.setEndDate(i), this.updateView())
            }
        }, keydown: function (t) {
            9 !== t.keyCode && 13 !== t.keyCode || this.hide()
        }, updateElement: function () {
            this.element.is("input") && !this.singleDatePicker && this.autoUpdateInput ? (this.element.val(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format)), this.element.trigger("change")) : this.element.is("input") && this.autoUpdateInput && (this.element.val(this.startDate.format(this.locale.format)), this.element.trigger("change"))
        }, remove: function () {
            this.container.remove(), this.element.off(".daterangepicker"), this.element.removeData()
        }
    }, i.fn.daterangepicker = function (t, e) {
        return this.each((function () {
            var a = i(this);
            a.data("daterangepicker") && a.data("daterangepicker").remove(), a.data("daterangepicker", new s(a, t, e))
        })), this
    }, s
}));