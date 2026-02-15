(ns shadow.grove.ui.card
  (:require
    [shadow.grove :as sg :refer (<< css)]))

(def $card
  (css {:border-radius "var(--ui-radius)"
        :border "1px solid hsl(var(--ui-border))"
        :background-color "hsl(var(--ui-background))"
        :color "hsl(var(--ui-foreground))"
        :box-shadow "0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)"}))

(def $header
  (css :flex :flex-col
    {:padding "24px 24px 0 24px"
     :gap "6px"}))

(def $title
  (css {:font-size "24px"
        :font-weight "600"
        :line-height "1"
        :letter-spacing "-0.025em"}))

(def $description
  (css {:font-size "14px"
        :color "hsl(var(--ui-muted-foreground))"}))

(def $content
  (css {:padding "24px"
        :padding-top "0"}))

(def $footer
  (css :flex :items-center
    {:padding "0 24px 24px 24px"}))

(defn card [opts body]
  (<< [:div {:class [$card (:class opts)]}
       body]))

(defn card-header [opts body]
  (<< [:div {:class [$header (:class opts)]}
       body]))

(defn card-title [opts body]
  (<< [:h3 {:class [$title (:class opts)]}
       body]))

(defn card-description [opts body]
  (<< [:p {:class [$description (:class opts)]}
       body]))

(defn card-content [opts body]
  (<< [:div {:class [$content (:class opts)]}
       body]))

(defn card-footer [opts body]
  (<< [:div {:class [$footer (:class opts)]}
       body]))
