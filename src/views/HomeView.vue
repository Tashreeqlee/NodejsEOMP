<template>
  <div class="home">
    <div id="home_image">
      <h1>WELCOME TO MATRIX PERFORMANCE</h1>
      <img id="landing_page_image" class="img-fluid" src="https://i.postimg.cc/0ydGgf45/1000262055-2280-1536.jpg" alt="home_image">
      <h3>"EXCEDE YOUR LIMITS AND ENTER THE MATRIX"</h3>
    </div>

    <!-- carousel start -->
    <div id="wheels" class="container-fluid">
      <!-- carousel -->
      <div id="carouselExample" class="carousel slide container-fluid">
        <div class="carousel-inner container-fluid">
          <div class="carousel-item active">
            <img
              id="wheel_image"
              src="https://i.postimg.cc/QM51hqCn/uc-33.png"
              class="img-fluid"
              alt="wheel_1"
            />
          </div>
          <div class="carousel-item">
            <img
              id="wheel_image"
              src="https://i.postimg.cc/0jg8xp6Z/uc-27-1.png"
              class="img-fluid"
              alt="wheel_2"
            />
          </div>
          <div class="carousel-item">
            <img
              id="wheel_image"
              src="https://i.postimg.cc/8z7ndxXJ/uc-12.png"
              class="img-fluid"
              alt="wheel_3"
            />
          </div>
          <div class="carousel-item">
            <img
              id="wheel_image"
              src="https://i.postimg.cc/0Q4zSMzJ/uc-35.png"
              class="img-fluid"
              alt="wheel_4"
            />
          </div>
          <div class="carousel-item">
            <img
              id="wheel_image"
              src="https://i.postimg.cc/D0YRnhYh/uc-25.png"
              class="img-fluid"
              alt="wheel_5"
            />
          </div>
          <div class="carousel-item">
            <img
              id="wheel_image"
              src="https://i.postimg.cc/MKQ9v1nV/uc-15-2.png"
              class="img-fluid"
              alt="wheel_6"
            />
          </div>
          <div class="carousel-item">
            <img
              id="wheel_image"
              src="https://i.postimg.cc/28RKdHR2/uc-11-1.png"
              class="img-fluid"
              alt="wheel_7"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>

<style scoped>
.home {
  background-color: #C8C8C8;
}

#wheel_image {
  height: 20rem;
}

#carouselExample {
  width: 30%;
}

#wheels {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
}





</style>
