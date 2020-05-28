export interface EditableDataType<RowData> {
  isEditable?: (rowData: RowData) => boolean
  isDeletable?: (rowData: RowData) => boolean
  onRowAdd?: (newData: RowData) => Promise<any>
  onRowUpdate?: (newData: RowData, oldData?: RowData) => Promise<any>
  onRowDelete?: (oldData: RowData) => Promise<any>
}

export function editableFunc(): EditableDataType<any> {
  return {
    // isEditable: rowData => rowData.name === "a", // only name(a) rows would be editable
    // isDeletable: rowData => rowData.name === "b", // only name(a) rows would be deletable
    onRowAdd: newData =>
      new Promise(resolve => {
        setTimeout(() => {
          {
            console.log(newData)
            /* const data = this.state.data;
            data.push(newData);
            this.setState({ data }, () => resolve()); */
          }
          resolve()
        }, 1000)
      }),
    onRowUpdate: (newData, oldData) =>
      new Promise(resolve => {
        setTimeout(() => {
          {
            console.log(newData, oldData)
            /* const data = this.state.data;
            const index = data.indexOf(oldData);
            data[index] = newData;
            this.setState({ data }, () => resolve()); */
          }
          resolve()
        }, 1000)
      }),
    onRowDelete: oldData =>
      new Promise(resolve => {
        setTimeout(() => {
          {
            console.log(oldData)
            /* let data = this.state.data;
            const index = data.indexOf(oldData);
            data.splice(index, 1);
            this.setState({ data }, () => resolve()); */
          }
          resolve()
        }, 1000)
      })
  }
}
