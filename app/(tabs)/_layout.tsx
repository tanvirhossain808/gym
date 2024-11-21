import { Tabs, usePathname } from "expo-router"
import React from "react"
import { Platform, StyleSheet, Text, View } from "react-native"

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
                    tabBarIcon: ({ focused, color }) => (
                        <HexagonIcon
                            focused={focused}
                            icon={
                                <FontAwesome
                                    name="home"
                                    size={24}
                                    color={color}
                                />
                            }
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="heart"
                options={{
                    title: "Heart",
                    tabBarIcon: ({ focused, color }) => (
                        <HexagonIcon
                            focused={focused}
                            icon={
                                <FontAwesome
                                    name="heart"
                                    size={24}
                                    color={color}
                                />
                            }
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="dumbbell"
                options={{
                    title: "Explore",
                    tabBarIcon: ({ focused, color }) => (
                        <HexagonIcon
                            width={60}
                            height={50}
                            bg={focused ? "green" : "white"}
                            focused={focused}
                            icon={
                                // <MaterialCommunityIcons
                                //     name="arm-flex-outline"
                                //     size={30}
                                //     color={color}
                                // />
                                <FontAwesome6
                                    name="dumbbell"
                                    size={30}
                                    color={color}
                                />
                            }
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="explore"
                options={{
                    title: "Explore",
                    tabBarIcon: ({ focused, color }) => (
                        <HexagonIcon
                            focused={focused}
                            icon={
                                <AntDesign
                                    name="linechart"
                                    size={24}
                                    color={color}
                                />
                            }
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="comment"
                options={{
                    title: "Explore",
                    tabBarIcon: ({ focused, color }) => (
                        <HexagonIcon
                            focused={focused}
                            icon={
                                // <IconSymbol
                                //     size={28}
                                //     name="paperplane.fill"
                                //     color={color}
                                // />
                                <FontAwesome
                                    name="comment-o"
                                    size={24}
                                    color={color}
                                />
                            }
                        />
                    ),
                }}
            />
        </Tabs>
    )
}

function HexagonIcon({
    focused,
    icon,
    width = 50,
    height = 40,
    bg = "",
}: {
    focused: boolean
    icon: React.ReactNode
    width?: number
    height?: number
    bg?: string
}) {
    return (
        <View
            style={[
                styles.hexagon,
                focused && styles.hexagonActive,
                { width: width },
                { height: height },
                bg && { backgroundColor: bg },
            ]}
        >
            <View style={styles.hexagonInner}>{icon}</View>
            {focused && <View style={styles.activeIndicator} />}
        </View>
    )
}

const styles = StyleSheet.create({
    hexagon: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        // transform: [{ rotate: "-45deg" }],
        borderRadius: 10,
        clipPath:
            "polygon(20% 0%, 80% 0%, 100% 50%, 80% 100%, 20% 100%, 0% 50%)",
    },
    hexagonInner: {
        // transform: [{ rotate: "-40deg" }],
        justifyContent: "center",
        alignItems: "center",
    },
    hexagonActive: {
        backgroundColor: "green",
    },
    activeIndicator: {
        transform: [
            { rotate: "-45deg" }, // Rotating the indicator to align it with the hexagon
            { translateX: 30 }, // Move it 50 units to the right
        ],
        position: "absolute",
        bottom: -20,
        // width: 100,
        // left: 1,
        translateX: 10,
        height: 2,
        backgroundColor: "#fff",
        // borderRadius: 4,
    },
})
