import { Localization } from "material-table"

type props = {
  t?: any
}

export default function localization({ t }: props): Localization {
  return {
    header: {
      actions: t("actions")
    },
    toolbar: {
      searchTooltip: t("searchTooltip"),
      searchPlaceholder: t("searchPlaceholder"),
      nRowsSelected: t("nRowsSelected"),
      exportTitle: t("exportTitle"),
      exportAriaLabel: t("exportAriaLabel"),
      exportName: t("exportName")
    },
    body: {
      addTooltip: t("addTooltip"),
      editTooltip: t("editTooltip"),
      deleteTooltip: t("deleteTooltip"),
      emptyDataSourceMessage: t("emptyDataSourceMessage"),
      filterRow: {
        filterTooltip: t("filterTooltip")
      },
      editRow: {
        deleteText: t("deleteText"),
        cancelTooltip: t("cancelTooltip"),
        saveTooltip: t("saveTooltip")
      }
    },
    grouping: {
      groupedBy: t("groupedBy"),
      placeholder: t("placeholder")
    },
    pagination: {
      firstTooltip: t("firstTooltip"),
      firstAriaLabel: t("firstAriaLabel"),
      previousTooltip: t("previousTooltip"),
      previousAriaLabel: t("previousAriaLabel"),
      nextTooltip: t("nextTooltip"),
      nextAriaLabel: t("nextAriaLabel"),
      labelDisplayedRows: t("labelDisplayedRows"),
      labelRowsPerPage: t("labelRowsPerPage"),
      lastTooltip: t("lastTooltip"),
      lastAriaLabel: t("lastAriaLabel"),
      labelRowsSelect: t("labelRowsSelect")
    }
  }
}
