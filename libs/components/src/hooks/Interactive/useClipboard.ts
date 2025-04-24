export const useClipboard = () => {
  const permission = navigator.permissions
    .query({
      name: 'clipboard-write' as PermissionName,
    })
    .then((r) => console.log(r));
  navigator.clipboard.writeText('dw').then((r) => console.log(r));
};
