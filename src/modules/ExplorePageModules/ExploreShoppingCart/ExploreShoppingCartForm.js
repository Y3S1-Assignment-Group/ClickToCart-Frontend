import React, { Component } from "react";
import LogoImg from "../../../assets/img/HomePage/logo.png";

class ExploreShoppingCartForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 0,
    };
  }

  render() {
    return (
      <div>
        <div className="text-center">
          <img
            src={LogoImg}
            alt="logo"
            style={{ width: "250px", height: "350px" }}
          />
        </div>
        <form className="mt-3">
          <div class="mb-3">
            <input type="text" class="form-control" placeholder="search" />
          </div>

          {/* Categories Radio Button */}
          <div class="mb-3">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                ALL
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                APPLE
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                SAMSUNG
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                NOKIA
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                OPPO
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                Huwawei
              </label>
            </div>
          </div>

          <div class="mb-3">
            <label
              for="customRange1"
              class="form-label"
              style={{ fontWeight: "bold" }}
            >
              Price <span id="demo"> 0 LKR - {this.state.price}</span> LKR
            </label>
            <input
              type="range"
              class="form-range"
              value={this.state.price}
              min="0"
              max="10000"
              step="100"
              id="customRange1"
              onChange={(e) => {
                this.setState({ price: e.target.value });
              }}
            />
          </div>

          {/* Categories Radio Button */}
          <div class="mb-3">
            <label
              for="customRange1"
              class="form-label"
              style={{ fontWeight: "bold" }}
            >
              RAM
            </label>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                ALL
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                1 GB
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                2 GB
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                3 GB
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                4 GB
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                6 GB
              </label>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default ExploreShoppingCartForm;
