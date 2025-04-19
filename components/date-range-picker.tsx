"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"
import { X } from "lucide-react"
import { format } from "date-fns"
import { zhCN } from "date-fns/locale"
import type { DateRange } from "react-day-picker"

interface DateRangePickerProps {
  dateRange: DateRange | undefined
  onDateRangeChange: (range: DateRange | undefined) => void
  onClose: () => void
}

export function DateRangePicker({ dateRange, onDateRangeChange, onClose }: DateRangePickerProps) {
  const [localDateRange, setLocalDateRange] = useState<DateRange | undefined>(dateRange)

  const handleSelect = (range: DateRange | undefined) => {
    setLocalDateRange(range)
    onDateRangeChange(range)
  }

  return (
    <Card className="w-auto">
      <CardContent className="p-0">
        <div className="flex items-center justify-between p-3 border-b">
          <div className="font-medium">选择日期范围</div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
        <div className="p-3">
          <Calendar
            mode="range"
            selected={localDateRange}
            onSelect={handleSelect}
            numberOfMonths={2}
            locale={zhCN}
            className="rounded-md border"
          />
          <div className="mt-4 flex justify-between">
            <div className="text-sm">
              {localDateRange?.from ? (
                localDateRange.to ? (
                  <>
                    <span className="font-medium">已选择: </span>
                    {format(localDateRange.from, "yyyy-MM-dd")} 至 {format(localDateRange.to, "yyyy-MM-dd")}
                  </>
                ) : (
                  <>
                    <span className="font-medium">开始日期: </span>
                    {format(localDateRange.from, "yyyy-MM-dd")}
                  </>
                )
              ) : (
                <span className="text-muted-foreground">请选择日期范围</span>
              )}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setLocalDateRange(undefined)
                onDateRangeChange(undefined)
              }}
            >
              清除
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
