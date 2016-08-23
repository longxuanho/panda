/**
 * Kendo UI v2016.2.504
 */

(function(f){
    if (typeof define === 'function' && define.amd) {
        define(["kendo.core"], f);
    } else {
        f();
    }
}(function(){
(function ($, undefined) {
/* FlatColorPicker messages */

if (kendo.ui.FlatColorPicker) {
kendo.ui.FlatColorPicker.prototype.options.messages =
$.extend(true, kendo.ui.FlatColorPicker.prototype.options.messages,{
  "apply": "Thử",
  "cancel": "Hủy bỏ"
});
}

/* ColorPicker messages */

if (kendo.ui.ColorPicker) {
kendo.ui.ColorPicker.prototype.options.messages =
$.extend(true, kendo.ui.ColorPicker.prototype.options.messages,{
  "apply": "Thử",
  "cancel": "Hủy bỏ"
});
}

/* ColumnMenu messages */

if (kendo.ui.ColumnMenu) {
kendo.ui.ColumnMenu.prototype.options.messages =
$.extend(true, kendo.ui.ColumnMenu.prototype.options.messages,{
  "sortAscending": "Tăng dần",
  "sortDescending": "Giảm dần",
  "filter": "Bộ lọc",
  "columns": "Các cột",
  "done": "Xong",
  "settings": "Thiết lập các cột",
  "lock": "Khóa",
  "unlock": "Mở khóa"
});
}

/* Editor messages */

if (kendo.ui.Editor) {
kendo.ui.Editor.prototype.options.messages =
$.extend(true, kendo.ui.Editor.prototype.options.messages,{
  "bold": "Đậm",
  "italic": "Nghiêng",
  "underline": "Gạch chân",
  "strikethrough": "Gạch bỏ",
  "superscript": "Ký số trên",
  "subscript": "Chỉ số dưới",
  "justifyCenter": "Căn lề giữa",
  "justifyLeft": "Căn lề trái",
  "justifyRight": "Căn lề phải",
  "justifyFull": "Cân đối",
  "insertUnorderedList": "Chèn danh sách không thứ tự",
  "insertOrderedList": "Chèn danh sách có thứ tự",
  "indent": "Thụt dòng",
  "outdent": "Kéo dòng",
  "createLink": "Chèn liên kết",
  "unlink": "Xóa liên kết",
  "insertImage": "Chèn hình ảnh",
  "insertFile": "Chèn file",
  "insertHtml": "Chèn HTML",
  "viewHtml": "Xem HTML",
  "fontName": "Chọn kiểu Font",
  "fontNameInherit": "(font kế thừa)",
  "fontSize": "Chọn kích cỡ font",
  "fontSizeInherit": "(size kế thừa)",
  "formatBlock": "Định dạng",
  "formatting": "Định dạng",
  "foreColor": "Màu chữ",
  "backColor": "Màu nền",
  "style": "Styles",
  "emptyFolder": "Thư mục trống",
  "uploadFile": "Upload",
  "orderBy": "Sắp xếp theo:",
  "orderBySize": "Kích cỡ",
  "orderByName": "Tên",
  "invalidFileType": "Kiểu file được chọn \"{0}\" không hợp lệ. Các định dạng file được hỗ trợ là {1}.",
  "deleteFile": 'Bạn chắc chắn muốn xóa "{0}"?',
  "overwriteFile": 'Một file với tên "{0}" đã tồn tại trong thư mục hiện thời. Bạn có muốn ghi đè?',
  "directoryNotFound": "Không tìm thấy thư mục chỉ định.",
  "imageWebAddress": "Địa chỉ Web",
  "imageAltText": "Text thay thế",
  "imageWidth": "Chiều rộng (px)",
  "imageHeight": "Chiều cao (px)",
  "fileWebAddress": "Địa chỉ Web",
  "fileTitle": "Tiêu đề",
  "linkWebAddress": "Địa chỉ Web",
  "linkText": "Text",
  "linkToolTip": "ToolTip",
  "linkOpenInNewWindow": "Mở liên kết trong cửa sổ mới",
  "dialogUpdate": "Cập nhật",
  "dialogInsert": "Chèn mới",
  "dialogButtonSeparator": "hoặc",
  "dialogCancel": "Hủy bỏ",
  "createTable": "Tạo bảng",
  "addColumnLeft": "Thêm cột phía trái",
  "addColumnRight": "Thêm cột phía phải",
  "addRowAbove": "Thêm hàng phía trên",
  "addRowBelow": "Thêm hàng phía dưới",
  "deleteRow": "Xóa hàng",
  "deleteColumn": "Xóa cột"
});
}

/* FileBrowser messages */

if (kendo.ui.FileBrowser) {
kendo.ui.FileBrowser.prototype.options.messages =
$.extend(true, kendo.ui.FileBrowser.prototype.options.messages,{
  "uploadFile": "Tải lên",
  "orderBy": "Sắp xếp theo",
  "orderByName": "Tên",
  "orderBySize": "Kích cỡ",
  "directoryNotFound": "Không tìm thấy thư mục được chỉ định.",
  "emptyFolder": "Thư mục trống",
  "deleteFile": 'Bạn có chắc muốn xóa "{0}"?',
  "invalidFileType": "Kiểu file được chọn \"{0}\" không hợp lệ. Các định dạng file được hỗ trợ là {1}.",
  "overwriteFile": "Một file với tên \"{0}\" đã tồn tại trong thư mục hiện thời. Bạn có muốn ghi đè?",
  "dropFilesHere": "thả file vào đây để tải lên",
  "search": "Tìm kiếm"
});
}

/* FilterCell messages */

if (kendo.ui.FilterCell) {
kendo.ui.FilterCell.prototype.options.messages =
$.extend(true, kendo.ui.FilterCell.prototype.options.messages,{
  "isTrue": "là đúng",
  "isFalse": "là sai",
  "filter": "Bộ lọc",
  "clear": "Gỡ lọc",
  "operator": "Toán tử"
});
}

/* FilterCell operators */

if (kendo.ui.FilterCell) {
kendo.ui.FilterCell.prototype.options.operators =
$.extend(true, kendo.ui.FilterCell.prototype.options.operators,{
  "string": {
    "eq": "Bằng với",
    "neq": "Khác với",
    "startswith": "Bắt đầu với",
    "contains": "Chứa",
    "doesnotcontain": "Không chứa",
    "endswith": "Kết thúc với"
  },
  "number": {
    "eq": "Bằng với",
    "neq": "Khác với",
    "gte": "Lớn hơn hoặc bằng",
    "gt": "Lớn hơn",
    "lte": "Bé hơn hoặc bằng",
    "lt": "Bé hơn"
  },
  "date": {
    "eq": "Bằng với",
    "neq": "Khác với",
    "gte": "Từ ngày này về sau",
    "gt": "Sau ngày",
    "lte": "Từ ngày này về trước",
    "lt": "Trước ngày"
  },
  "enums": {
    "eq": "Bằng với",
    "neq": "Khác với"
  }
});
}

/* FilterMenu messages */

if (kendo.ui.FilterMenu) {
kendo.ui.FilterMenu.prototype.options.messages =
$.extend(true, kendo.ui.FilterMenu.prototype.options.messages,{
  "info": "Hiển thị các mục với giá trị:",
  "isTrue": "là đúng",
  "isFalse": "là sai",
  "filter": "Bộ lọc",
  "clear": "Gỡ bỏ",
  "and": "Và",
  "or": "Hoặc",
  "selectValue": "-Chọn giá trị-",
  "operator": "Toán tử",
  "value": "Giá trị",
  "cancel": "Hủy bỏ"
});
}

/* FilterMenu operator messages */

if (kendo.ui.FilterMenu) {
kendo.ui.FilterMenu.prototype.options.operators =
$.extend(true, kendo.ui.FilterMenu.prototype.options.operators,{
  "string": {
    "eq": "Bằng với",
    "neq": "Khác với",
    "startswith": "Bắt đầu với",
    "contains": "Chứa",
    "doesnotcontain": "Không chứa",
    "endswith": "Kết thúc với",
    "isnull": "Là null",
    "isnotnull": "Khác null",
    "isempty": "Không nội dung",
    "isnotempty": "Có nội dung"
  },
  "number": {
    "eq": "Bằng với",
    "neq": "Khác với",
    "gte": "Lớn hơn hoặc bằng",
    "gt": "Lớn hơn",
    "lte": "Bé hơn hoặc bằng",
    "lt": "Bé hơn",
    "isnull": "Là null",
    "isnotnull": "Khác null"
  },
  "date": {
    "eq": "Bằng với",
    "neq": "Khác với",
    "gte": "Từ ngày này về sau",
    "gt": "Sau ngày",
    "lte": "Từ ngày này về trước",
    "lt": "Sau ngày",
    "isnull": "Là null",
    "isnotnull": "Khác null"
  },
  "enums": {
    "eq": "Bằng với",
    "neq": "Khác với",
    "isnull": "Là null",
    "isnotnull": "Khác null"
  }
});
}

/* FilterMultiCheck messages */

if (kendo.ui.FilterMultiCheck) {
kendo.ui.FilterMultiCheck.prototype.options.messages =
$.extend(true, kendo.ui.FilterMultiCheck.prototype.options.messages,{
  "checkAll": "Chọn tất",
  "clear": "Bỏ chọn",
  "filter": "Bộ lọc",
  "search": "Tìm kiếm"
});
}

/* Gantt messages */

if (kendo.ui.Gantt) {
kendo.ui.Gantt.prototype.options.messages =
$.extend(true, kendo.ui.Gantt.prototype.options.messages,{
  "actions": {
    "addChild": "Add Child",
    "append": "Add Task",
    "insertAfter": "Add Below",
    "insertBefore": "Add Above",
    "pdf": "Export to PDF"
  },
  "cancel": "Cancel",
  "deleteDependencyWindowTitle": "Delete dependency",
  "deleteTaskWindowTitle": "Delete task",
  "destroy": "Delete",
  "editor": {
    "assingButton": "Assign",
    "editorTitle": "Task",
    "end": "End",
    "percentComplete": "Complete",
    "resources": "Resources",
    "resourcesEditorTitle": "Resources",
    "resourcesHeader": "Resources",
    "start": "Start",
    "title": "Title",
    "unitsHeader": "Units"
  },
  "save": "Save",
  "views": {
    "day": "Day",
    "end": "End",
    "month": "Month",
    "start": "Start",
    "week": "Week",
    "year": "Year"
  }
});
}

/* Grid messages */

if (kendo.ui.Grid) {
kendo.ui.Grid.prototype.options.messages =
$.extend(true, kendo.ui.Grid.prototype.options.messages,{
  "commands": {
    "cancel": "Hủy bỏ các thay đổi",
    "canceledit": "Hủy bỏ",
    "create": "Thêm bản ghi mới",
    "destroy": "Xóa",
    "edit": "Sửa",
    "excel": "Xuất file Excel",
    "pdf": "Xuất file PDF",
    "save": "Lưu các thay đổi",
    "select": "Chọn",
    "update": "Cập nhật"
  },
  "editable": {
    "cancelDelete": "Hủy bỏ",
    "confirmation": "Bạn chắc chắn muốn xóa bản ghi này?",
    "confirmDelete": "Xóa"
  },
  "noRecords": "Không có thông tin hiển thị."
});
}

/* TreeList messages */

if (kendo.ui.TreeList) {
kendo.ui.TreeList.prototype.options.messages =
$.extend(true, kendo.ui.TreeList.prototype.options.messages,{
    "noRows": "Không có thông tin hiển thị",
    "loading": "Đang tải...",
    "requestFailed": "Truy vấn thất bại.",
    "retry": "Thử lại",
    "commands": {
        "edit": "Sửa",
        "update": "Cập nhật",
        "canceledit": "Hủy bỏ",
        "create": "Thêm bản ghi mới",
        "createchild": "Thêm mục con",
        "destroy": "Xóa",
        "excel": "Xuất file Excel",
        "pdf": "Xuất file PDF"
    }
});
}

/* Groupable messages */

if (kendo.ui.Groupable) {
kendo.ui.Groupable.prototype.options.messages =
$.extend(true, kendo.ui.Groupable.prototype.options.messages,{
  "empty": "Kéo thả để nhóm tại đây"
});
}

/* NumericTextBox messages */

if (kendo.ui.NumericTextBox) {
kendo.ui.NumericTextBox.prototype.options =
$.extend(true, kendo.ui.NumericTextBox.prototype.options,{
  "upArrowText": "Tăng giá trị",
  "downArrowText": "Giảm giá trị"
});
}

/* Pager messages */

if (kendo.ui.Pager) {
kendo.ui.Pager.prototype.options.messages =
$.extend(true, kendo.ui.Pager.prototype.options.messages,{
  "allPages": "Tất cả",
  "display": "{0} - {1} của {2} mục",
  "empty": "Không có thông tin hiển thị",
  "page": "Trang",
  "of": "của {0}",
  "itemsPerPage": "mục mỗi trang",
  "first": "Trang đầu tiên",
  "previous": "Trang trước",
  "next": "Trang kế tiếp",
  "last": "Trang cuối cùng",
  "refresh": "Làm mới",
  "morePages": "Nhiều trang hơn"
});
}

/* PivotGrid messages */

if (kendo.ui.PivotGrid) {
kendo.ui.PivotGrid.prototype.options.messages =
$.extend(true, kendo.ui.PivotGrid.prototype.options.messages,{
  "measureFields": "Drop Data Fields Here",
  "columnFields": "Drop Column Fields Here",
  "rowFields": "Drop Rows Fields Here"
});
}

/* PivotFieldMenu messages */

if (kendo.ui.PivotFieldMenu) {
kendo.ui.PivotFieldMenu.prototype.options.messages =
$.extend(true, kendo.ui.PivotFieldMenu.prototype.options.messages,{
  "info": "Show items with value that:",
  "filterFields": "Fields Filter",
  "filter": "Filter",
  "include": "Include Fields...",
  "title": "Fields to include",
  "clear": "Clear",
  "ok": "Ok",
  "cancel": "Cancel",
  "operators": {
    "contains": "Contains",
    "doesnotcontain": "Does not contain",
    "startswith": "Starts with",
    "endswith": "Ends with",
    "eq": "Is equal to",
    "neq": "Is not equal to"
  }
});
}

/* RecurrenceEditor messages */

if (kendo.ui.RecurrenceEditor) {
kendo.ui.RecurrenceEditor.prototype.options.messages =
$.extend(true, kendo.ui.RecurrenceEditor.prototype.options.messages,{
  "frequencies": {
    "never": "Never",
    "hourly": "Hourly",
    "daily": "Daily",
    "weekly": "Weekly",
    "monthly": "Monthly",
    "yearly": "Yearly"
  },
  "hourly": {
    "repeatEvery": "Repeat every: ",
    "interval": " hour(s)"
  },
  "daily": {
    "repeatEvery": "Repeat every: ",
    "interval": " day(s)"
  },
  "weekly": {
    "interval": " week(s)",
    "repeatEvery": "Repeat every: ",
    "repeatOn": "Repeat on: "
  },
  "monthly": {
    "repeatEvery": "Repeat every: ",
    "repeatOn": "Repeat on: ",
    "interval": " month(s)",
    "day": "Day "
  },
  "yearly": {
    "repeatEvery": "Repeat every: ",
    "repeatOn": "Repeat on: ",
    "interval": " year(s)",
    "of": " of "
  },
  "end": {
    "label": "End:",
    "mobileLabel": "Ends",
    "never": "Never",
    "after": "After ",
    "occurrence": " occurrence(s)",
    "on": "On "
  },
  "offsetPositions": {
    "first": "first",
    "second": "second",
    "third": "third",
    "fourth": "fourth",
    "last": "last"
  },
  "weekdays": {
    "day": "day",
    "weekday": "weekday",
    "weekend": "weekend day"
  }
});
}

/* Scheduler messages */

if (kendo.ui.Scheduler) {
kendo.ui.Scheduler.prototype.options.messages =
$.extend(true, kendo.ui.Scheduler.prototype.options.messages,{
  "allDay": "all day",
  "date": "Date",
  "event": "Event",
  "time": "Time",
  "showFullDay": "Show full day",
  "showWorkDay": "Show business hours",
  "today": "Today",
  "save": "Save",
  "cancel": "Cancel",
  "destroy": "Delete",
  "deleteWindowTitle": "Delete event",
  "ariaSlotLabel": "Selected from {0:t} to {1:t}",
  "ariaEventLabel": "{0} on {1:D} at {2:t}",
  "editable": {
    "confirmation": "Are you sure you want to delete this event?"
  },
  "views": {
    "day": "Day",
    "week": "Week",
    "workWeek": "Work Week",
    "agenda": "Agenda",
    "month": "Month"
  },
  "recurrenceMessages": {
    "deleteWindowTitle": "Delete Recurring Item",
    "deleteWindowOccurrence": "Delete current occurrence",
    "deleteWindowSeries": "Delete the series",
    "editWindowTitle": "Edit Recurring Item",
    "editWindowOccurrence": "Edit current occurrence",
    "editWindowSeries": "Edit the series",
    "deleteRecurring": "Do you want to delete only this event occurrence or the whole series?",
    "editRecurring": "Do you want to edit only this event occurrence or the whole series?"
  },
  "editor": {
    "title": "Title",
    "start": "Start",
    "end": "End",
    "allDayEvent": "All day event",
    "description": "Description",
    "repeat": "Repeat",
    "timezone": " ",
    "startTimezone": "Start timezone",
    "endTimezone": "End timezone",
    "separateTimezones": "Use separate start and end time zones",
    "timezoneEditorTitle": "Timezones",
    "timezoneEditorButton": "Time zone",
    "timezoneTitle": "Time zones",
    "noTimezone": "No timezone",
    "editorTitle": "Event"
  }
});
}

/* Spreadsheet messages */

if (kendo.spreadsheet && kendo.spreadsheet.messages.borderPalette) {
kendo.spreadsheet.messages.borderPalette =
$.extend(true, kendo.spreadsheet.messages.borderPalette,{
  "allBorders": "Đóng khung tất",
  "insideBorders": "Viền phía trong",
  "insideHorizontalBorders": "Viền trong ngang",
  "insideVerticalBorders": "Viền trong đứng",
  "outsideBorders": "Viền ngoài",
  "leftBorder": "Viền trái",
  "topBorder": "Viền trên",
  "rightBorder": "Viền phải",
  "bottomBorder": "Viền dưới",
  "noBorders": "Không viền",
  "reset": "Reset màu sắc",
  "customColor": "Tùy chọn màu...",
  "apply": "Thử",
  "cancel": "Hủy bỏ"
});
}

if (kendo.spreadsheet && kendo.spreadsheet.messages.dialogs) {
kendo.spreadsheet.messages.dialogs =
$.extend(true, kendo.spreadsheet.messages.dialogs,{
  "apply": "Thử",
  "save": "Lưu",
  "cancel": "Hủy bỏ",
  "remove": "Xóa",
  "okText": "OK",
  "formatCellsDialog": {
    "title": "Định dạng",
    "categories": {
      "number": "Kiểu số",
      "currency": "Tiền tệ",
      "date": "Ngày"
      }
  },
  "fontFamilyDialog": {
    "title": "Font"
  },
  "fontSizeDialog": {
    "title": "Kích cỡ font"
  },
  "bordersDialog": {
    "title": "Viền"
  },
  "alignmentDialog": {
    "title": "Căn lề",
    "buttons": {
     "justtifyLeft": "Căn trái",
     "justifyCenter": "Căn giữa",
     "justifyRight": "Căn phải",
     "justifyFull": "Cân đối",
     "alignTop": "Căn trên",
     "alignMiddle": "Căn giữa",
     "alignBottom": "Căn dưới"
    }
  },
  "mergeDialog": {
    "title": "Merge cell",
    "buttons": {
      "mergeCells": "Merge tất cả",
      "mergeHorizontally": "Merge theo chiều ngang",
      "mergeVertically": "Merge theo chiều đứng",
      "unmerge": "Bỏ Merge"
    }
  },
  "freezeDialog": {
    "title": "Freeze panes",
    "buttons": {
      "freezePanes": "Freeze panes",
      "freezeRows": "Freeze rows",
      "freezeColumns": "Freeze columns",
      "unfreeze": "Unfreeze panes"
    }
  },
  "validationDialog": {
    "title": "Data Validation",
    "hintMessage": "Please enter a valid {0} value {1}.",
    "hintTitle": "Validation {0}",
    "criteria": {
      "any": "Any value",
      "number": "Number",
      "text": "Text",
      "date": "Date",
      "custom": "Custom Formula",
      "list": "List"
    },
    "comparers": {
      "greaterThan": "greater than",
      "lessThan": "less than",
      "between": "between",
      "notBetween": "not between",
      "equalTo": "equal to",
      "notEqualTo": "not equal to",
      "greaterThanOrEqualTo": "greater than or equal to",
      "lessThanOrEqualTo": "less than or equal to"
    },
    "comparerMessages": {
      "greaterThan": "greater than {0}",
      "lessThan": "less than {0}",
      "between": "between {0} and {1}",
      "notBetween": "not between {0} and {1}",
      "equalTo": "equal to {0}",
      "notEqualTo": "not equal to {0}",
      "greaterThanOrEqualTo": "greater than or equal to {0}",
      "lessThanOrEqualTo": "less than or equal to {0}",
      "custom": "that satisfies the formula: {0}"
    },
    "labels": {
      "criteria": "Criteria",
      "comparer": "Comparer",
      "min": "Min",
      "max": "Max",
      "value": "Value",
      "start": "Start",
      "end": "End",
      "onInvalidData": "On invalid data",
      "rejectInput": "Reject input",
      "showWarning": "Show warning",
      "showHint": "Show hint",
      "hintTitle": "Hint title",
      "hintMessage": "Hint message",
      "ignoreBlank": "Ignore blank"
    },
    "placeholders": {
      "typeTitle": "Type title",
      "typeMessage": "Type message"
    }
  },
  "saveAsDialog": {
    "title": "Save As...",
    "labels": {
      "fileName": "File name",
      "saveAsType": "Save as type"
    }
  },
  "exportAsDialog": {
    "title": "Export...",
    "labels": {
      "fileName": "File name",
      "saveAsType": "Save as type",
      "exportArea": "Export",
      "paperSize": "Paper size",
      "margins": "Margins",
      "orientation": "Orientation",
      "print": "Print",
      "guidelines": "Guidelines",
      "center": "Center",
      "horizontally": "Horizontally",
      "vertically": "Vertically"
    }
  },
  "modifyMergedDialog": {
    "errorMessage": "Cannot change part of a merged cell."
  },
  "useKeyboardDialog": {
    "title": "Copying and pasting",
    "errorMessage": "These actions cannot be invoked through the menu. Please use the keyboard shortcuts instead:",
    "labels": {
      "forCopy": "for copy",
      "forCut": "for cut",
      "forPaste": "for paste"
    }
  },
  "unsupportedSelectionDialog": {
    "errorMessage": "That action cannot be performed on multiple selection."
  }
});
}

if (kendo.spreadsheet && kendo.spreadsheet.messages.filterMenu) {
kendo.spreadsheet.messages.filterMenu =
$.extend(true, kendo.spreadsheet.messages.filterMenu,{
  "sortAscending": "Sort range A to Z",
  "sortDescending": "Sort range Z to A",
  "filterByValue": "Filter by value",
  "filterByCondition": "Filter by condition",
  "apply": "Apply",
  "search": "Search",
  "addToCurrent": "Add to current selection",
  "clear": "Clear",
  "blanks": "(Blanks)",
  "operatorNone": "None",
  "and": "AND",
  "or": "OR",
  "operators": {
    "string": {
      "contains": "Text contains",
      "doesnotcontain": "Text does not contain",
      "startswith": "Text starts with",
      "endswith": "Text ends with"
    },
    "date": {
      "eq":  "Date is",
      "neq": "Date is not",
      "lt":  "Date is before",
      "gt":  "Date is after"
    },
    "number": {
      "eq": "Is equal to",
      "neq": "Is not equal to",
      "gte": "Is greater than or equal to",
      "gt": "Is greater than",
      "lte": "Is less than or equal to",
      "lt": "Is less than"
    }
  }
});
}

if (kendo.spreadsheet && kendo.spreadsheet.messages.toolbar) {
kendo.spreadsheet.messages.toolbar =
$.extend(true, kendo.spreadsheet.messages.toolbar,{
  "addColumnLeft": "Add column left",
  "addColumnRight": "Add column right",
  "addRowAbove": "Add row above",
  "addRowBelow": "Add row below",
  "alignment": "Alignment",
  "alignmentButtons": {
    "justtifyLeft": "Align left",
    "justifyCenter": "Center",
    "justifyRight": "Align right",
    "justifyFull": "Justify",
    "alignTop": "Align top",
    "alignMiddle": "Align middle",
    "alignBottom": "Align bottom"
  },
  "backgroundColor": "Background",
  "bold": "Bold",
  "borders": "Borders",
  "colorPicker": {
    "reset": "Reset color",
    "customColor": "Custom color..."
  },
  "copy": "Copy",
  "cut": "Cut",
  "deleteColumn": "Delete column",
  "deleteRow": "Delete row",
  "excelImport": "Import from Excel...",
  "filter": "Filter",
  "fontFamily": "Font",
  "fontSize": "Font size",
  "format": "Custom format...",
  "formatTypes": {
    "automatic": "Automatic",
    "number": "Number",
    "percent": "Percent",
    "financial": "Financial",
    "currency": "Currency",
    "date": "Date",
    "time": "Time",
    "dateTime": "Date time",
    "duration": "Duration",
    "moreFormats": "More formats..."
  },
  "formatDecreaseDecimal": "Decrease decimal",
  "formatIncreaseDecimal": "Increase decimal",
  "freeze": "Freeze panes",
  "freezeButtons": {
    "freezePanes": "Freeze panes",
    "freezeRows": "Freeze rows",
    "freezeColumns": "Freeze columns",
    "unfreeze": "Unfreeze panes"
  },
  "italic": "Italic",
  "merge": "Merge cells",
  "mergeButtons": {
    "mergeCells": "Merge all",
    "mergeHorizontally": "Merge horizontally",
    "mergeVertically": "Merge vertically",
    "unmerge": "Unmerge"
  },
  "open": "Open...",
  "paste": "Paste",
  "quickAccess": {
    "redo": "Redo",
    "undo": "Undo"
  },
  "saveAs": "Save As...",
  "sortAsc": "Sort ascending",
  "sortDesc": "Sort descending",
  "sortButtons": {
    "sortSheetAsc": "Sort sheet A to Z",
    "sortSheetDesc": "Sort sheet Z to A",
    "sortRangeAsc": "Sort range A to Z",
    "sortRangeDesc": "Sort range Z to A"
  },
  "textColor": "Text Color",
  "textWrap": "Wrap text",
  "underline": "Underline",
  "validation": "Data validation..."
});
}

if (kendo.spreadsheet && kendo.spreadsheet.messages.view) {
kendo.spreadsheet.messages.view =
$.extend(true, kendo.spreadsheet.messages.view,{
  "errors": {
    "shiftingNonblankCells": "Cannot insert cells due to data loss possibility. Select another insert location or delete the data from the end of your worksheet.",
    "filterRangeContainingMerges": "Cannot create a filter within a range containing merges",
    "validationError": "The value that you entered violates the validation rules set on the cell."
  },
  "tabs": {
    "home": "Home",
    "insert": "Insert",
    "data": "Data"
  }
});
}

/* Slider messages */

if (kendo.ui.Slider) {
kendo.ui.Slider.prototype.options =
$.extend(true, kendo.ui.Slider.prototype.options,{
  "increaseButtonTitle": "Tăng",
  "decreaseButtonTitle": "Giảm"
});
}

/* TreeList messages */

if (kendo.ui.TreeList) {
kendo.ui.TreeList.prototype.options.messages =
$.extend(true, kendo.ui.TreeList.prototype.options.messages,{
  "noRows": "Không có nội dung hiển thị.",
  "loading": "Đang tải...",
  "requestFailed": "Truy vấn thất bại.",
  "retry": "Thử lại",
  "commands": {
      "edit": "Sửa",
      "update": "Cập nhật",
      "canceledit": "Hủy bỏ",
      "create": "Thêm bản ghi mới",
      "createchild": "Thêm mục con",
      "destroy": "Xóa",
      "excel": "Xuất file Excel",
      "pdf": "Xuất file PDF"
  }
});
}

if (kendo.ui.TreeList) {
kendo.ui.TreeList.prototype.options.columnMenu =
$.extend(true, kendo.ui.TreeList.prototype.options.columnMenu, {
    "messages": {
        "columns": "Choose columns",
        "filter": "Apply filter",
        "sortAscending": "Sort (asc)",
        "sortDescending": "Sort (desc)"
    }
});
}

/* TreeView messages */

if (kendo.ui.TreeView) {
kendo.ui.TreeView.prototype.options.messages =
$.extend(true, kendo.ui.TreeView.prototype.options.messages,{
  "loading": "Loading...",
  "requestFailed": "Request failed.",
  "retry": "Retry"
});
}

/* Upload messages */

if (kendo.ui.Upload) {
kendo.ui.Upload.prototype.options.localization=
$.extend(true, kendo.ui.Upload.prototype.options.localization,{
  "select": "Chọn file...",
  "cancel": "Hủy bỏ",
  "retry": "Thử lại",
  "remove": "Xóa",
  "uploadSelectedFiles": "Tải lên",
  "dropFilesHere": "thả file vào đây để tải lên",
  "statusUploading": "đang tải lên",
  "statusUploaded": "đã tải xong",
  "statusWarning": "cảnh báo",
  "statusFailed": "thất bại",
  "headerStatusUploading": "Đang tải...",
  "headerStatusUploaded": "Đã xong"
});
}

/* Validator messages */

if (kendo.ui.Validator) {
kendo.ui.Validator.prototype.options.messages =
$.extend(true, kendo.ui.Validator.prototype.options.messages,{
  "required": "{0} là bắt buộc",
  "pattern": "{0} không hợp lệ",
  "min": "{0} phải lớn hơn hoặc bằng {1}",
  "max": "{0} phải bé hơn hoặc bằng {1}",
  "step": "{0} không hợp lệ",
  "email": "{0} không phải là địa chỉ email hợp lệ",
  "url": "{0} không phải là URL hợp lệ",
  "date": "{0} không phải là ngày hợp lệ",
  "dateCompare": "Ngày kết thúc phải sau hoặc trùng ngày bắt đầu"
});
}
})(window.kendo.jQuery);
}));