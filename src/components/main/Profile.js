

<BootstrapDialog
onClose={handleClose}
aria-labelledby="customized-dialog-title"
open={open}
>
<BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
  MY ACCOUNT
</BootstrapDialogTitle>
<DialogContent dividers>
  <Typography gutterBottom>
  isAuthenticated && (
    <div>
      <img src={user.picture} alt={user.name} />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  )
  </Typography>
</DialogContent>
</BootstrapDialog>