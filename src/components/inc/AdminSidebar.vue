<template>
    <!-- partial:partials/_sidebar.html -->
    <nav class="sidebar sidebar-offcanvas" id="sidebar">
        <ul class="nav">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">
              <i class="mdi mdi-grid-large menu-icon"></i>
              <span class="menu-title">Dashboard</span>
            </RouterLink>
          </li>
          <li class="nav-item nav-category">Components</li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="collapse" href="#services" aria-expanded="false" aria-controls="services">
              <i class="menu-icon mdi mdi-floor-plan"></i>
              <span class="menu-title">Services</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="services">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                  <RouterLink class="nav-link" to="services-list">Services List</RouterLink>
                </li>
                <li class="nav-item">
                  <RouterLink class="nav-link" to="create-services">Create Services</RouterLink>
                </li>
              </ul>
            </div>
          </li>

          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="collapse" href="#bookings" aria-expanded="false" aria-controls="bookings">
              <i class="menu-icon mdi mdi-floor-plan"></i>
              <span class="menu-title">Bookings</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="bookings">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                  <RouterLink class="nav-link" to="bookings-list">Bookings List</RouterLink>
                </li>
                <li class="nav-item">
                  <RouterLink class="nav-link" to="create-bookings">Create Booking</RouterLink>
                </li>
              </ul>
            </div>
          </li>

          <li class="nav-item nav-category">Roles and Permissions</li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="collapse" href="#admins" aria-expanded="false" aria-controls="admins">
              <i class="menu-icon mdi mdi-floor-plan"></i>
              <span class="menu-title">Admins</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="admins">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                  <RouterLink class="nav-link" to="admins-list">Admins List</RouterLink>
                </li>
                <li class="nav-item">
                  <RouterLink class="nav-link" to="create-admin">Create Admin</RouterLink>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="collapse" href="#users" aria-expanded="false" aria-controls="users">
              <i class="menu-icon mdi mdi-floor-plan"></i>
              <span class="menu-title">Users</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="users">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                  <RouterLink class="nav-link" to="users-list">Users List</RouterLink>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="collapse" href="#permissions" aria-expanded="false" aria-controls="permissions">
              <i class="menu-icon mdi mdi-floor-plan"></i>
              <span class="menu-title">Permissions</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="permissions">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                  <RouterLink class="nav-link" to="permissions-list">Permissions List</RouterLink>
                </li>
                <li class="nav-item">
                  <RouterLink class="nav-link" to="create-permissions">Create Permission</RouterLink>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="collapse" href="#roles" aria-expanded="false" aria-controls="roles">
              <i class="menu-icon mdi mdi-floor-plan"></i>
              <span class="menu-title">Roles</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="roles">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                  <RouterLink class="nav-link" to="roles-list">Roles List</RouterLink>
                </li>
                <li class="nav-item">
                  <RouterLink class="nav-link" to="create-roles">Create Roles</RouterLink>
                </li>
              </ul>
            </div>
          </li>

          <li class="nav-item nav-category">Product Settings</li>


        </ul>
      </nav>
      <!-- partial -->
</template>

<script>
export default {
    name: 'AdminSidebar',
    data(){
        return{}
    }
}
</script>
