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
            <a class="nav-link" data-bs-toggle="collapse" href="#classes" aria-expanded="false" aria-controls="classes">
              <i class="menu-icon mdi mdi-floor-plan"></i>
              <span class="menu-title">Classes</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="classes">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                  <RouterLink class="nav-link" to="classes-list">Classes List</RouterLink>
                </li>
                <li class="nav-item">
                  <RouterLink class="nav-link" to="create-classes">Create Classes</RouterLink>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="collapse" href="#categories" aria-expanded="false" aria-controls="categories">
              <i class="menu-icon mdi mdi-floor-plan"></i>
              <span class="menu-title">Categories</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="categories">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                  <RouterLink class="nav-link" to="categories-list">Categories List</RouterLink>
                </li>
                <li class="nav-item">
                  <RouterLink class="nav-link" to="create-categories">Create Categories</RouterLink>
                </li>
              </ul>
            </div>
          </li>

          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="collapse" href="#products" aria-expanded="false" aria-controls="products">
              <i class="menu-icon mdi mdi-floor-plan"></i>
              <span class="menu-title">Products</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="products">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                  <RouterLink class="nav-link" to="products-list">Products List</RouterLink>
                </li>
                <li class="nav-item">
                  <RouterLink class="nav-link" to="create-products">Create Products</RouterLink>
                </li>
              </ul>
            </div>
          </li>

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
