import { Tabs, usePathname } from "expo-router"
import React from "react"
import { ImageBackground, Platform, StyleSheet, Text, View } from "react-native"

import { HapticTab } from "@/components/HapticTab"
import { IconSymbol } from "@/components/ui/IconSymbol"
import TabBarBackground from "@/components/ui/TabBarBackground"
import { Colors } from "@/constants/Colors"
import { useColorScheme } from "@/hooks/useColorScheme"
import {
    AntDesign,
    FontAwesome,
    FontAwesome6,
    MaterialCommunityIcons,
} from "@expo/vector-icons"

export default function TabLayout() {
    const colorScheme = useColorScheme()
    const pathname = usePathname()

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "black",
                headerShown: false,
                tabBarButton: HapticTab,
                tabBarBackground: TabBarBackground,
                tabBarStyle: Platform.select({
                    ios: {
                        position: "absolute",
                    },
                    default: {},
                }),
                tabBarShowLabel: false,
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ focused, color }) => {
                        const imageSource = focused
                            ? require("../../assets/images/activetabicon.png")
                            : require("../../assets/images/tabicon.png")

                        return (
                            <ImageBackground
                                source={imageSource}
                                style={styles1.background}
                                resizeMode="cover"
                            >
                                <FontAwesome
                                    name="home"
                                    size={25}
                                    color={color}
                                />
                            </ImageBackground>
                        )
                    },
                }}
            />
            <Tabs.Screen
                name="heart"
                options={{
                    title: "Heart",
                    tabBarIcon: ({ focused, color }) => {
                        const imageSource = focused
                            ? require("../../assets/images/activetabicon.png")
                            : require("../../assets/images/tabicon.png")
                        return (
                            <ImageBackground
                                source={imageSource}
                                style={styles1.background}
                                resizeMode="cover"
                            >
                                <FontAwesome
                                    name="heart"
                                    size={25}
                                    color={color}
                                />
                            </ImageBackground>
                        )
                    },
                }}
            />

            <Tabs.Screen
                name="dumbbell"
                options={{
                    title: "Explore",
                    tabBarIcon: ({ focused, color }) => {
                        const imageSource = focused
                            ? require("../../assets/images/activetabicon.png")
                            : require("../../assets/images/tabicon.png")
                        return (
                            <ImageBackground
                                source={imageSource}
                                style={styles1.background}
                                resizeMode="cover"
                            >
                                <FontAwesome6
                                    name="dumbbell"
                                    size={25}
                                    color={color}
                                />
                            </ImageBackground>
                        )
                    },
                }}
            />
            <Tabs.Screen
                name="explore"
                options={{
                    title: "Explore",
                    tabBarIcon: ({ focused, color }) => {
                        const imageSource = focused
                            ? require("../../assets/images/activetabicon.png")
                            : require("../../assets/images/tabicon.png")
                        return (
                            <ImageBackground
                                source={imageSource}
                                style={styles1.background}
                                resizeMode="cover"
                            >
                                <AntDesign
                                    name="linechart"
                                    size={25}
                                    color={color}
                                />
                            </ImageBackground>
                        )
                    },
                }}
            />
            <Tabs.Screen
                name="comment"
                options={{
                    title: "Explore",
                    tabBarIcon: ({ focused, color }) => {
                        const imageSource = focused
                            ? require("../../assets/images/activetabicon.png")
                            : require("../../assets/images/tabicon.png")
                        return (
                            <ImageBackground
                                source={imageSource}
                                style={styles1.background}
                                resizeMode="cover"
                            >
                                <FontAwesome
                                    name="comment-o"
                                    size={25}
                                    color={color}
                                />
                            </ImageBackground>
                        )
                    },
                }}
            />
        </Tabs>
    )
}

const styles1 = StyleSheet.create({
    background: {
        display: "flex",
        width: 50,
        flexDirection: "row",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
    },
})
