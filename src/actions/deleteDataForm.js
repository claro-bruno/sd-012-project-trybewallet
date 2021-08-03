export const DELETE_DATA_FORM = 'DELETE_DATA_FORM';

export const deleteDataForm = (id) => ({
  type: DELETE_DATA_FORM,
  payload: id,
});
