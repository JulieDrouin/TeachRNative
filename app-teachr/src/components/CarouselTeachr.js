import * as React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import Carousel from "react-native-snap-carousel";

export default class CarouselTeachr extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          firstname: "Jérome",
          lastname: "Du Jardin",
          formation: "Université Paris Dauphine",
          description:
            "Pédagogue et calme, je sais m'adapter à l'élève et comprendre sa méthode d'apprentissage afin de l'aider à progresser au mieux.",
          image: require("../image/chocobo.jpg"),
        },
        {
          firstname: "Cyril",
          lastname: "Du Jardin",
          formation: "Université Paris Dauphine",
          description:
            "Pédagogue et calme, je sais m'adapter à l'élève et comprendre sa méthode d'apprentissage afin de l'aider à progresser au mieux.",
          image: require("../image/batman.jpg"),
        },
        {
          firstname: "Bernadette",
          lastname: "Du Jardin",
          formation: "Université Paris Dauphine",
          description:
            "Pédagogue et calme, je sais m'adapter à l'élève et comprendre sa méthode d'apprentissage afin de l'aider à progresser au mieux.",
          image: require("../image/oups.jpg"),
        },
        {
          firstname: "Angélique",
          lastname: "Du Jardin",
          formation: "Université Paris Dauphine",
          description:
            "Pédagogue et calme, je sais m'adapter à l'élève et comprendre sa méthode d'apprentissage afin de l'aider à progresser au mieux.",
          image: require("../image/pikachu.jpg"),
        },
        {
          firstname: "Camille",
          lastname: "Du Jardin",
          formation: "Université Paris Dauphine",
          description:
            "Pédagogue et calme, je sais m'adapter à l'élève et comprendre sa méthode d'apprentissage afin de l'aider à progresser au mieux.",
          image: require("../image/pingu.jpg"),
        },
        {
          firstname: "Boby",
          lastname: "Du Jardin",
          formation: "Université Paris Dauphine",
          description:
            "Pédagogue et calme, je sais m'adapter à l'élève et comprendre sa méthode d'apprentissage afin de l'aider à progresser au mieux.",
          image: require("../image/mog.jpg"),
        },
        {
          firstname: "Charlène",
          lastname: "Du Jardin",
          formation: "Université Paris Dauphine",
          description:
            "Pédagogue et calme, je sais m'adapter à l'élève et comprendre sa méthode d'apprentissage afin de l'aider à progresser au mieux.",
          image: require("../image/porg.jpeg"),
        },
        {
          firstname: "David",
          lastname: "Du Jardin",
          formation: "Université Paris Dauphine",
          description:
            "Pédagogue et calme, je sais m'adapter à l'élève et comprendre sa méthode d'apprentissage afin de l'aider à progresser au mieux.",
          image: require("../image/spider.jpg"),
        },
        {
          firstname: "Gwendoline",
          lastname: "Du Jardin",
          formation: "Université Paris Dauphine",
          description:
            "Pédagogue et calme, je sais m'adapter à l'élève et comprendre sa méthode d'apprentissage afin de l'aider à progresser au mieux.",
          image: require("../image/cat.jpg"),
        },
        {
          firstname: "Aurélie",
          lastname: "Du Jardin",
          formation: "Université Paris Dauphine",
          description:
            "Pédagogue et calme, je sais m'adapter à l'élève et comprendre sa méthode d'apprentissage afin de l'aider à progresser au mieux.",
          image: require("../image/guizmo.jpg"),
        },
      ],
    };
  }

  _renderItem({ item, index }) {
    return (
      <View style={styles.containerInfoTeach}>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          <Image
            style={{
              width: 50,
              height: 50,
              borderRadius: 150 / 2,
              overflow: "hidden",
              resizeMode: "stretch",
            }}
            source={item.image}
          />
          <View style={{ flex: 1, marginLeft: 10, fontSize: 25 }}>
            <Text style={styles.firstname}>{item.firstname}</Text>
            <Text style={styles.lastname}>{item.lastname}</Text>
          </View>
        </View>

        <View style={{ flexDirection: "column", flex: 1 }}>
          <View style={{ flex: 1, marginTop: 20 }}>
            <Text style={{ color: "grey" }}>Formation</Text>
            <Text style={styles.formation}>{item.formation}</Text>
          </View>
          <View style={{ flex: 2, marginTop: 10 }}>
            <Text style={{ color: "grey" }}>Description</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>

          <View style={{ flex: 2 }}>
            <Button title="Prendre un cours avec ce Teach'r"></Button>
            <Button title="Retirer ce Teach'r de mes favoris"></Button>
          </View>
        </View>
      </View>
    );
  }

  render() {
    return (
      <Carousel
        layout={"default"}
        ref={(ref) => (this.carousel = ref)}
        data={this.state.carouselItems}
        activeSlideAlignment={"start"}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
        sliderWidth={300}
        itemWidth={300}
        renderItem={this._renderItem}
        onSnapToItem={(index) => this.setState({ activeIndex: index })}
      />
    );
  }
}

const styles = StyleSheet.create({
  containerInfoTeach: {
    flexDirection: "column",
    backgroundColor: "white",
    borderRadius: 6,
    height: 400,
    padding: 18,
    marginLeft: 30,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 1,
  },
  firstname: {
    flex: 1,
    fontSize: 20,
    justifyContent: "center",
  },
  lastname: {
    flex: 1,
    fontSize: 20,
    justifyContent: "center",
  },
  formation: {
    flex: 1,
    justifyContent: "center",
  },
  description: {
    flex: 3,
    justifyContent: "center",
  },
});
