<template>
  <div class="col-lg-8">
    <form action="#">
      <div class="row gy-3">
        <div class="col-lg-6">
          <label class="form-label text-sm text-uppercase" for="firstName"
            >First name
          </label>
          <input
            class="form-control form-control-lg"
            type="text"
            id="firstName"
            placeholder="Enter your first name"
          />
        </div>
        <div class="col-lg-6">
          <label class="form-label text-sm text-uppercase" for="lastName"
            >Last name
          </label>
          <input
            class="form-control form-control-lg"
            type="text"
            id="lastName"
            placeholder="Enter your last name"
          />
        </div>
        <div class="col-lg-6">
          <label class="form-label text-sm text-uppercase" for="email"
            >Email address
          </label>
          <input
            class="form-control form-control-lg"
            type="email"
            id="email"
            placeholder="e.g. Jason@example.com"
          />
        </div>
        <div class="col-lg-6">
          <label class="form-label text-sm text-uppercase" for="phone"
            >Phone number
          </label>
          <input
            class="form-control form-control-lg"
            type="tel"
            id="phone"
            placeholder="e.g. +02 245354745"
          />
        </div>
        <div class="col-lg-6">
          <label class="form-label text-sm text-uppercase" for="company"
            >Company name (optional)
          </label>
          <input
            class="form-control form-control-lg"
            type="text"
            id="company"
            placeholder="Your company name"
          />
        </div>
        <div class="col-lg-6 form-group">
          <label class="form-label text-sm text-uppercase" for="country"
            >Country</label
          >
          <select
            class="country"
            id="country"
            data-customclass="form-control form-control-lg rounded-0"
          >
            <option value>Choose your country</option>
          </select>
        </div>
        <div class="col-lg-12">
          <label class="form-label text-sm text-uppercase" for="address"
            >Address line 1
          </label>
          <input
            class="form-control form-control-lg"
            type="text"
            id="address"
            placeholder="House number and street name"
          />
        </div>
        <div class="col-lg-12">
          <label class="form-label text-sm text-uppercase" for="addressalt"
            >Address line 2
          </label>
          <input
            class="form-control form-control-lg"
            type="text"
            id="addressalt"
            placeholder="Apartment, Suite, Unit, etc (optional)"
          />
        </div>
        <div class="col-lg-6">
          <label class="form-label text-sm text-uppercase" for="city"
            >Town/City
          </label>
          <input class="form-control form-control-lg" type="text" id="city" />
        </div>
        <div class="col-lg-6">
          <label class="form-label text-sm text-uppercase" for="state"
            >State/County
          </label>
          <input class="form-control form-control-lg" type="text" id="state" />
        </div>

        <div class="col-lg-12 form-group">
          <button class="btn btn-dark" type="submit">Place order</button>
        </div>
      </div>
    </form>
  </div>
</template>